"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const faqs = [
  {
    question: "How does the automated data broker removal work?",
    answer: "Our system continuously scans major data broker websites for your personal information. When found, we automatically submit removal requests on your behalf using our proprietary technology. We track the removal process and verify that your information has been taken down."
  },
  {
    question: "How can I get full protection for my family?",
    answer: "Each paid plan allows you to add up to 5 family members at a highly discounted rate, compounding per member added. Each family member gets their own privacy dashboard, customized removal requests, and individual monitoring. You'll also get a comprehensive family privacy assessment and consolidated reporting."
  },
  {
    question: "How long does it take to remove my information?",
    answer: "Initial removal requests are typically processed within 24-48 hours. However, complete removal from data broker sites can take 30-45 days, as each broker has different removal processes and timeframes. We continuously monitor and verify removals throughout this period."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time. For monthly plans, you'll maintain access until the end of your current billing period. For annual plans, you can continue using the service until your subscription year ends."
  },
  {
    question: "What happens after I sign up?",
    answer: "After signing up, you'll complete a brief onboarding process to verify your identity and provide the information we need to protect. We'll immediately begin scanning for your data across broker sites and the dark web. You'll receive your first privacy report within 24 hours."
  },
  {
    question: "Is my personal information secure with your service?",
    answer: "Absolutely. We use bank-level encryption and security measures to protect your data. We never share your information with third parties, and our systems are regularly audited for security compliance. Your privacy and security are our top priority."
  }
];

export default function FAQ() {
  return (
      <section className="pt-10 pb-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                Frequently Asked Questions
            </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="no-underline hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </div>
      </section>
  );
}