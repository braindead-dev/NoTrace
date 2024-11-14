"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Start taking control of your digital footprint",
    features: [
      "Monthly data broker scan",
      "Basic removal requests (25+ brokers)",
      "Email notifications",
      "Community support",
      "Basic privacy report"
    ]
  },
  {
    name: "Plus",
    price: "4.99",
    description: "Enhanced protection for privacy-conscious individuals",
    features: [
      "Weekly data broker scans",
      "Advanced removal requests (75+ brokers)",
      "Priority support",
      "Real-time alerts",
      "Detailed monthly reports",
      "Basic dark web monitoring"
    ],
    popular: true
  },
  {
    name: "Pro",
    price: "9.99",
    description: "Maximum protection for complete digital privacy",
    features: [
      "Daily data broker scans",
      "Complete removal service (150+ brokers)",
      "24/7 priority support",
      "Advanced dark web monitoring",
      "Identity theft protection",
      "Custom removal requests",
      "Family protection (up to 5 members)"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground mt-4 text-lg">
            Choose the perfect plan for your privacy needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="relative h-full">
                <Card className={`p-8 h-full flex flex-col justify-between ${plan.popular ? 'border-blue-600 border-2' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 -right-3">
                      <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="ml-1 text-muted-foreground">/month</span>
                    </div>
                    <p className="mt-4 text-muted-foreground">{plan.description}</p>
                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className={`w-full mt-8 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}>
                    {plan.price === "0" ? "Start Free" : "Get Started"}
                  </Button>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}