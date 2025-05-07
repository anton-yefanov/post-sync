"use client";

import {
  type Environments,
  initializePaddle,
  type Paddle,
} from "@paddle/paddle-js";
import type { CheckoutEventsData } from "@paddle/paddle-js/types/checkout/events";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PriceSection } from "@/components/checkout/price-section";
import { clearStoredCheckoutPriceId } from "@/utils/redirectState";
import { useSession } from "next-auth/react";

interface PathParams {
  priceId: string;
  [key: string]: string | string[];
}

export function CheckoutContents() {
  const session = useSession();
  const userId = session.data?.user?.id;
  const userEmail = session.data?.user?.email;
  const { priceId } = useParams<PathParams>();
  const [paddle, setPaddle] = useState<Paddle | null>(null);
  const [checkoutData, setCheckoutData] = useState<CheckoutEventsData | null>(
    null,
  );

  const handleCheckoutEvents = (event: CheckoutEventsData) => {
    setCheckoutData(event);
  };

  useEffect(() => {
    clearStoredCheckoutPriceId();
  }, []);

  useEffect(() => {
    if (
      !paddle?.Initialized &&
      process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN &&
      process.env.NEXT_PUBLIC_PADDLE_ENV
    ) {
      initializePaddle({
        token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
        environment: process.env.NEXT_PUBLIC_PADDLE_ENV as Environments,
        eventCallback: (event) => {
          if (event.data && event.name) {
            handleCheckoutEvents(event.data);
          }
        },
        checkout: {
          settings: {
            variant: "one-page",
            displayMode: "inline",
            theme: "light",
            allowLogout: !userEmail,
            frameTarget: "paddle-checkout-frame",
            frameInitialHeight: 450,
            frameStyle:
              "width: 100%; background-color: transparent; border: none",
            successUrl: "/",
          },
        },
      }).then(async (paddle) => {
        if (paddle && priceId) {
          setPaddle(paddle);
          paddle.Checkout.open({
            ...(userEmail && { customer: { email: userEmail } }),
            items: [{ priceId: priceId, quantity: 1 }],
            customData: {
              userId: userId,
            },
          });
        }
      });
    }
  }, [paddle?.Initialized, priceId, userEmail]);

  return (
    <div className="rounded-lg md:bg-background md:p-10 md:pl-16 md:pt-16 md:min-h-[400px] flex flex-col justify-between relative">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="w-full md:w-[400px]">
          <PriceSection checkoutData={checkoutData} />
        </div>
        <div className="min-w-[375px] lg:min-w-[535px]">
          <div className="text-base leading-[20px] font-semibold mb-8">
            Payment details
          </div>
          <div className="paddle-checkout-frame" />
        </div>
      </div>
    </div>
  );
}
