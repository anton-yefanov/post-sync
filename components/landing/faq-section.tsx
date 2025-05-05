import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 text-sm">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know about PostSync
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Which social media platforms do you support?
              </AccordionTrigger>
              <AccordionContent>
                We currently support Facebook, Instagram, Twitter, LinkedIn,
                Pinterest, TikTok, and YouTube. We&#39;re constantly adding more
                platforms based on user requests.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Can I schedule posts in advance?
              </AccordionTrigger>
              <AccordionContent>
                Yes! You can schedule posts weeks or even months in advance. Our
                calendar view makes it easy to plan your content strategy across
                all platforms.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer a 14-day free trial on all our plans. No credit
                card required to get started.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How do I cancel my subscription?
              </AccordionTrigger>
              <AccordionContent>
                You can cancel your subscription anytime from your account
                settings. There are no cancellation fees or long-term contracts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Is there a limit to how many posts I can schedule?
              </AccordionTrigger>
              <AccordionContent>
                Each plan has different limits. The Starter plan includes 30
                scheduled posts per month, Pro includes 100, and Business
                includes unlimited scheduled posts.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
