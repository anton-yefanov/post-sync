import { auth } from "@/auth";
import { CheckoutHeader } from "@/components/checkout/checkout-header";
import { CheckoutContents } from "@/components/checkout/checkout-contents";

export default async function CheckoutPage() {
  const session = await auth();

  return (
    <div className="w-full bg-background min-h-screen relative overflow-hidden">
      <div className="mx-auto max-w-6xl relative px-[16px] md:px-[32px] py-[24px] flex flex-col gap-6 justify-between">
        <CheckoutHeader />
        <CheckoutContents userEmail={session?.user?.email} />
      </div>
    </div>
  );
}
