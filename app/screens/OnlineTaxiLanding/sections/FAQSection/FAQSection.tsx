import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FAQSection = (): JSX.Element => {
  const faqItems = [
    {
      question: "Why should I choose Drivio?",
      answer:
        "Because Drvio is a very special taxi with more than 3 m people who are very happy with all the services we provide, and it's clear that our prices are very affordable for all people",
      defaultOpen: true,
    },
    {
      question: "Why is Drivio cheap?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Why isDrivio's service so friendly?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "24/7 custemer services?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "How to order Drivio?",
      answer: "",
      defaultOpen: false,
    },
  ];

  return (
    <section className="w-full py-10 md:py-20 bg-[#f3f3f3]">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center mb-8 min-[416px]:mb-10 md:mb-16">
          <h2 className="font-['Sora',Helvetica] font-semibold text-[#001422] text-2xl min-[767px]:text-3xl md:text-[40px] text-center leading-[1.2] min-[767px]:leading-[1.3] md:leading-[72px]">
            Frequently Asked Questions
            <br />
            (faq)
          </h2>
          <p className="font-['Sora',Helvetica] font-normal text-[#9a9a9a] text-sm min-[416px]:text-base text-center leading-6 min-[416px]:leading-7 md:leading-[28.8px] max-w-[444px] mt-3 min-[416px]:mt-4">
            Our Browser Faq Below, If You Can't Find The Answer In Gready
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-3 min-[416px]:space-y-4 w-full"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`item-${index}`}
              value={`item-${index}`}
              className={`rounded-[16px] min-[416px]:rounded-[20px] border border-solid ${index === 0 ? "bg-[#0095fe] border-[#0095fe]" : "bg-white border-[#ededed]"}`}
            >
              <AccordionTrigger
                className={`px-4 min-[416px]:px-6 py-3 min-[416px]:py-4 md:px-10 md:py-8 ${index === 0 ? "text-white" : "text-[#140c44]"} font-['Sora',Helvetica] font-semibold text-base min-[767px]:text-lg md:text-xl hover:no-underline`}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent
                className={`px-4 min-[416px]:px-6 pb-3 min-[416px]:pb-4 md:px-10 md:pb-8 ${index === 0 ? "text-white" : "text-[#140c44]"} font-['Sora',Helvetica] font-normal text-xs min-[416px]:text-sm md:text-base leading-6 min-[416px]:leading-7 md:leading-10`}
              >
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
