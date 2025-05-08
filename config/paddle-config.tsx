import { ProductName } from "@/components/pricing/product-name";

const ProductPriceIds: Record<ProductName, { month: string; year: string }> = {
  [ProductName.Pro]: {
    month: "pri_01jt1dem4kgd4pbssy0xdg9xrx",
    year: "pri_01jt1dh1wdcm7sfs69rwtf47kt",
  },
  [ProductName.Growth]: {
    month: "pri_01jsenhxjb336364080eb8cj2f",
    year: "pri_01jsenmkk7m5dn4w2hbtpvj10k",
  },
  [ProductName.Starter]: {
    month: "pri_01jrmp8knjp50fzhn81xaav70e",
    year: "pri_01jrmphzpecn0xmvth9wxsjvma",
  },
};

export const PaddleConfig = {
  products: [
    {
      name: ProductName.Pro,
      productId: "pro_01jt1ddywa0txvrhjd1xapz07m",
      priceId: ProductPriceIds.Pro,
      limits: [],
    },
    {
      name: ProductName.Growth,
      productId: "pro_01js1sx2ynpvn4m76vs0w4rqzr",
      priceId: ProductPriceIds.Growth,
      limits: [],
    },
    {
      name: ProductName.Starter,
      productId: "pro_01jrmp4hfhc97f4m2vp760ke98",
      priceId: ProductPriceIds.Starter,
      limits: [],
    },
  ],
};
