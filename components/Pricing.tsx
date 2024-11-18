"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import PricingCard from "@/components/PricingCard";

const features = [
  {
    title: "Automated Data Broker Removal",
    description: "Automatically remove your data from broker websites"
  },
  {
    title: "Real-time Monitoring",
    description: "Continuous scanning for new data exposures"
  },
  {
    title: "Dark Web Scanning",
    description: "Monitor dark web for your personal information"
  },
  {
    title: "Identity Theft Protection",
    description: "Advanced protection against identity theft"
  },
  {
    title: "24/7 Expert Support",
    description: "Round-the-clock access to privacy experts"
  },
  {
    title: "Custom Removal Requests",
    description: "Request removal from specific websites"
  }
];

const plans = {
  free: {
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
  individual: {
    monthly: {
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
      ]
    },
    annual: {
      name: "Pro",
      price: "4.99",
      savings: "38%",
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
      ]
    }
  },
  family: {
    monthly: {
      name: "Family",
      price: "10.99",
      description: "Complete protection for up to 5 family members",
      features: [
        "Everything in Pro plan",
        "Up to 5 family members",
        "Family dashboard",
        "Family privacy assessment"
      ]
    },
    annual: {
      name: "Family",
      price: "7.99",
      savings: "27%",
      description: "Complete protection for up to 5 family members",
      features: [
        "Everything in Pro plan",
        "Up to 5 family members",
        "Family dashboard",
        "Family privacy assessment"
      ]
    }
  }
};

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

        <Tabs defaultValue="monthly" className="w-full">
          <div className="flex flex-col items-center space-y-4 mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
              <TabsTrigger value="annual">Annual Billing</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div>
                <PricingCard plan={plans.free} />
              </motion.div>
              <motion.div>
                <PricingCard 
                  plan={plans.individual.monthly} 
                  variant="pro"
                />
              </motion.div>
              <motion.div>
                <PricingCard 
                  plan={plans.family.monthly} 
                  variant="family"
                />
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="annual" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <PricingCard 
                  plan={plans.individual.annual} 
                  variant="pro"
                  billing="annual"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <PricingCard 
                  plan={plans.family.annual} 
                  variant="family"
                  billing="annual"
                />
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">All Paid Plans Include</h3>
            <p className="text-muted-foreground">
              Enterprise-grade features for complete privacy protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}