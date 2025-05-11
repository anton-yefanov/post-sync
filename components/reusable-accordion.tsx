import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";

interface ReusableAccordionProps {
  trigger: React.ReactNode;
  content?: React.ReactNode;
}

export const ReusableAccordion = ({
  trigger,
  content,
}: ReusableAccordionProps) => {
  return (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline p-0 mb-1 [&>svg]:w-4 [&>svg]:h-4">
          {trigger}
        </AccordionTrigger>

        <AccordionContent className="bg-neutral-100 rounded-lg p-3">
          {content}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
