"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Automated Data Broker Removal",
  "Real-time Monitoring",
  "Dark Web Scanning",
  "Identity Theft Protection",
  "24/7 Expert Support",
  "Custom Removal Requests"
];

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
    name: "Monthly",
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
    price: "14.99",
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
    name: "Solo",
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
    name: "Family",
    price: "9.99",
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
    savings: "Save 33%"
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
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

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Everything You Need for Complete Privacy</h2>
            <p className="mt-4 text-lg text-gray-600">All paid plans include these powerful features</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-slate-50 p-4 rounded-lg"
              >
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Plans */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Monthly Plans</h2>
            <p className="mt-4 text-lg text-gray-600">Flexible protection with no long-term commitment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                      <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        {plan.variant && (
                          <span className="text-sm font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded">
                            {plan.variant === "family" ? "Family" : "Single"}
                          </span>
                        )}
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
                      {plan.price === "0" ? "Start Free" : "Get Started"}
                    </Button>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Annual Plans</h2>
            <p className="mt-4 text-lg text-gray-600">Save more with our annual subscription options</p>
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

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">Have questions? We're here to help.</p>
          </div>
          {/* Add FAQ content here if needed */}
        </div>
      </section>
    </div>
  );
}