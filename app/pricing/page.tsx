"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import PricingTabs from "@/components/pricing/PricingTabs";

import { features } from "@/components/Pricing";

const faqs = [
  {
    question: "How does the automated data broker removal work?",
    answer: "Our system continuously scans major data broker websites for your personal information. When found, we automatically submit removal requests on your behalf using our proprietary technology. We track the removal process and verify that your information has been taken down."
  },
  {
    question: "What's included in the family plan?",
    answer: "The family plan covers up to 5 family members and includes all features from the Pro plan. Each family member gets their own privacy dashboard, customized removal requests, and individual dark web monitoring. You'll also get a comprehensive family privacy assessment and consolidated reporting."
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

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-blue-50 to-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900">
              Choose Your Privacy Protection Plan
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Protect your personal information with our comprehensive privacy protection plans. 
              Choose the plan that best fits your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5}}
            viewport={{ once: true }}
            className="flex items-start space-x-4 bg-white p-6 rounded-lg"
        >
            <PricingTabs />
        </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Everything You Need for Complete Privacy</h2>
            <p className="mt-4 text-lg text-gray-600">All paid plans include these powerful features</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">Have questions? We're here to help.</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="text-lg font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}