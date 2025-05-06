"use client";

import { TiersPricing } from "@/components/pricing/variant/tiers-pricing";
import { PaddlePrices } from "@/components/pricing/usePaddlePrices";

export default function PricingSection({
  prices,
  loading,
}: {
  prices: PaddlePrices;
  loading: boolean;
}) {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 text-sm text-primary">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that&#39;s right for your social media needs
            </p>
          </div>
        </div>
        <TiersPricing prices={prices} loading={loading} />
      </div>
    </section>
  );
}
