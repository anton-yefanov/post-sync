"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { PaddlePrices } from "@/components/pricing/usePaddlePrices";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { config } from "@/config";
import { useSession } from "next-auth/react";
import { storeCheckoutRedirect } from "@/utils/redirectState";

interface TiersPricingProps {
  prices?: PaddlePrices;
  loading?: boolean;
}

export function TiersPricing({
  prices = {},
  loading = false,
}: TiersPricingProps) {
  const session = useSession();
  const [billingPeriod, setBillingPeriod] = useState<"month" | "year">("month");
  const router = useRouter();

  const handleGetStarted = (priceId: string) => {
    if (session.status === "authenticated") {
      router.push(`/checkout/${priceId}`);
    } else {
      storeCheckoutRedirect(priceId);
      router.push("/login");
    }
  };

  const savingsPercentage = 10;

  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <div className="inline-flex gap-2 items-center justify-center p-1 border rounded-lg bg-background">
        <Button
          variant={billingPeriod === "month" ? "default" : "ghost"}
          onClick={() => setBillingPeriod("month")}
          className="rounded-md min-w-[160px]"
        >
          Monthly
        </Button>
        <Button
          variant={billingPeriod === "year" ? "default" : "ghost"}
          onClick={() => setBillingPeriod("year")}
          className="rounded-md min-w-[160px]"
        >
          Yearly
          <Badge
            variant="outline"
            className="ml-2 bg-green-100 text-green-800 hover:bg-green-100"
          >
            Save {savingsPercentage}%
          </Badge>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 w-full max-w-6xl">
        {config.paddle.products.map((product) => {
          const priceId = product.priceId[billingPeriod];
          const price = prices[priceId] || (loading ? "Loading..." : "N/A");

          let displayPrice = price;
          let secondaryPriceInfo = null;

          if (!loading && price !== "N/A") {
            const numericPrice = Number.parseFloat(
              price.replace(/[^0-9.]/g, ""),
            );

            if (billingPeriod === "year") {
              // When yearly is selected, show monthly equivalent as primary price
              const monthlyEquivalent = (numericPrice / 12).toFixed(2);
              displayPrice = `$${monthlyEquivalent}`;
              secondaryPriceInfo = `Billed as ${price}/year`;
            }
          }

          return (
            <Card key={product.name} className="flex flex-col shadow-sm">
              <CardHeader>
                <h3 className="text-xl font-bold">{product.name}</h3>
                <div className="mt-2">
                  <div className="text-3xl font-bold">
                    {displayPrice}
                    <span className="text-base font-normal text-muted-foreground ml-1">
                      /month
                    </span>
                  </div>
                  {secondaryPriceInfo && (
                    <div className="text-sm text-muted-foreground mt-1">
                      {secondaryPriceInfo}
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardFooter>
                <Button
                  onClick={() => handleGetStarted(priceId)}
                  disabled={loading}
                  className="w-full"
                >
                  {loading || session.status === "loading"
                    ? "Loading..."
                    : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
