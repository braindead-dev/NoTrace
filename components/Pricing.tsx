"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "9.99",
    description: "Essential privacy protection for individuals",
    features: [
      "Monthly privacy scans",
      "Data removal from 50+ brokers",
      "Email notifications",
      "Basic support"
    ]
  },
  {
    name: "Professional",
    price: "19.99",
    description: "Advanced protection for comprehensive privacy",
    features: [
      "Weekly privacy scans",
      "Data removal from 100+ brokers",
      "Priority support",
      "Real-time alerts",
      "Detailed monthly reports",
      "Credit monitoring"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "39.99",
    description: "Maximum protection for you and your family",
    features: [
      "Daily privacy scans",
      "Data removal from 150+ brokers",
      "24/7 premium support",
      "Family protection (up to 5 members)",
      "Identity theft insurance",
      "Dark web monitoring",
      "Custom removal requests"
    ]
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground mt-4 text-lg">
            Choose the perfect plan for your privacy needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`p-8 relative ${plan.popular ? 'border-blue-600 border-2' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <p className="mt-4 text-muted-foreground">{plan.description}</p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-blue-600 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full mt-8 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}>
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}