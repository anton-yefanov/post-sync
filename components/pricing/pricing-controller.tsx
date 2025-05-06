"use client";

import { useEffect, useState } from "react";
import { Environments, initializePaddle, Paddle } from "@paddle/paddle-js";
import { usePaddlePrices } from "@/components/pricing/usePaddlePrices";
import PricingSection from "@/components/landing/pricing-section";

export const PricingController = () => {
  const [paddle, setPaddle] = useState<Paddle | undefined>(undefined);
  const { prices, loading } = usePaddlePrices(paddle, "US");

  useEffect(() => {
    if (
      process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN &&
      process.env.NEXT_PUBLIC_PADDLE_ENV
    ) {
      initializePaddle({
        token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
        environment: process.env.NEXT_PUBLIC_PADDLE_ENV as Environments,
      }).then((paddle) => {
        if (paddle) {
          setPaddle(paddle);
        }
      });
    }
  }, []);

  return <PricingSection prices={prices} loading={loading} />;
};
