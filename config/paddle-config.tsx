import { ProductName } from "@/components/pricing/product-name";

const ProductPriceIds: Record<ProductName, { month: string; year: string }> = {
  [ProductName.Starter]: {
    month: "pri_01jrmp8knjp50fzhn81xaav70e",
    year: "pri_01jrmphzpecn0xmvth9wxsjvma",
  },
  [ProductName.Growth]: {
    month: "pri_01jsenhxjb336364080eb8cj2f",
    year: "pri_01jsenmkk7m5dn4w2hbtpvj10k",
  },
  [ProductName.Pro]: {
    month: "pri_01jt1dem4kgd4pbssy0xdg9xrx",
    year: "pri_01jt1dh1wdcm7sfs69rwtf47kt",
  },
};

export const PaddleConfig = {
  pricingTier: [
    {
      name: ProductName.Starter,
      priceId: ProductPriceIds.Starter,
    },
    {
      name: ProductName.Growth,
      priceId: ProductPriceIds.Growth,
    },
    {
      name: ProductName.Pro,
      priceId: ProductPriceIds.Pro,
    },
  ],
};
