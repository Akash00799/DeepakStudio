import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export default function QnA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background select-none">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Find answers to common questions about our platform
          </p>
        </div>
        <div className="max-w-3xl mx-auto w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base sm:text-lg font-medium cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
