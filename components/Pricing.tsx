"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Basic privacy monitoring for individuals",
    features: [
      "Monthly data broker scan",
      "Basic privacy report",
      "Email notifications",
      "Personal info exposure alerts",
      "Privacy risk assessment"
    ]
  },
  {
    name: "Pro",
    price: "7.99",
    description: "Complete privacy protection for individuals",
    features: [
      "Weekly data broker scans",
      "Complete automated removal service",
      "Real-time alerts",
      "24/7 dedicated support",
      "Custom removal requests",
      "Complete privacy report",
      "Dark web monitoring",
      "Identity theft protection"
    ],
    popular: true,
    variant: "single"
  },
  {
    name: "Family",
    price: "10.99",
    description: "Complete protection for the whole family",
    features: [
      "Everything in Single plan",
      "Up to 5 family members",
      "Family dashboard",
      "Consolidated reporting",
      "Priority support",
      "Family privacy assessment"
    ],
    variant: "family"
  }
];

const annualPlans = [
  {
    name: "Annual",
    price: "4.99",
    description: "Complete privacy protection for individuals",
    features: [
      "Weekly data broker scans",
      "Complete automated removal service",
      "Real-time alerts",
      "24/7 dedicated support",
      "Custom removal requests",
      "Complete privacy report",
      "Dark web monitoring",
      "Identity theft protection"
    ],
    popular: true,
    variant: "single",
    savings: "Save 38%"
  },
  {
    name: "Annual",
    price: "7.99",
    description: "Complete protection for the whole family",
    features: [
      "Everything in Single plan",
      "Up to 5 family members",
      "Family dashboard",
      "Consolidated reporting",
      "Priority support",
      "Family privacy assessment"
    ],
    variant: "family",
    savings: "Save 33%" // fix this math
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Card className="p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold">{plans[0].name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">${plans[0].price}</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <p className="mt-4 text-muted-foreground">{plans[0].description}</p>
                <ul className="mt-6 space-y-4">
                  {plans[0].features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="w-full mt-8">
                Start Free
              </Button>
            </Card>
          </motion.div>

          {[plans[1], plans[2]].map((plan, index) => (
            <motion.div
              key={index + 1}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
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
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <span className="text-sm font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded">
                        {plan.variant === "family" ? "Family" : "Single"}
                      </span>
                    </div>
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
                    Get Started
                  </Button>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Save More with Annual Plans</h3>
          <p className="text-muted-foreground">Get the best value with our annual subscription options</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {annualPlans.map((plan, index) => (
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
                  {plan.savings && (
                    <div className="absolute -top-3 -right-3">
                      <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full shadow-lg">
                        {plan.savings}
                      </span>
                    </div>
                  )}
                  <div>
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <span className="text-sm font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded">
                        {plan.variant === "family" ? "Family" : "Single"}
                      </span>
                    </div>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="ml-1 text-muted-foreground">/month</span>
                      <span className="ml-2 text-sm text-muted-foreground">(billed annually)</span>
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
                    Get Started
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