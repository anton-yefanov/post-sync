import { CheckoutEventsData } from "@paddle/paddle-js/types/checkout/events";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Separator } from "@/components/ui/separator";
import { CheckoutPriceContainer } from "@/components/checkout/checkout-price-container";
import { CheckoutPriceAmount } from "./checkout-price-amount";
import { CheckoutLineItems } from "./checkout-line-items";

interface Props {
  checkoutData: CheckoutEventsData | null;
}

export function PriceSection({ checkoutData }: Props) {
  return (
    <>
      <div className="hidden md:block">
        <CheckoutPriceContainer checkoutData={checkoutData} />
        <CheckoutLineItems checkoutData={checkoutData} />
      </div>
      <div className="block md:hidden">
        <CheckoutPriceAmount checkoutData={checkoutData} />
        <Separator className="relative bg-border/50 mt-6 checkout-order-summary-mobile-yellow-highlight" />
        <Accordion type="single" collapsible>
          <AccordionItem className="border-none" value="item-1">
            <AccordionTrigger className="text-muted-foreground no-underline!">
              Order summary
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <CheckoutLineItems checkoutData={checkoutData} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
