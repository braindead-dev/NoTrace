"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import PricingCard from "@/components/pricing/PricingCard";

export const plans = {
  free: {
    name: "Free Basic",
    price: "0",
    description: "Essential privacy monitoring",
    features: [
      "Monthly scans of data broker databases",
      "Basic privacy risk reports",
      "Email notifications for exposure alerts",
      "Alerts for personal information exposure",
      "Privacy risk assessment tools",
    ],
  },
  pro: {
    monthly: {
      name: "Pro",
      price: "4.99",
      description: "Comprehensive privacy protection",
      features: [
        "Automatic removal from 240+ data broker sites (1 name and city)",
        "Monthly scans and removal updates",
        "Progress tracking and risk reports",
        "Automatic opt-outs from newly added data brokers",
        "Detailed removal reports with screenshots (every ~90 days)",
        "Family discounts (up to 40%)",
        "Dedicated email support",
      ],
    },
    annual: {
      name: "Pro",
      price: "3.99",
      description: "Comprehensive privacy protection",
      features: [
        "Automatic removal from 240+ data broker sites (1 name and city)",
        "Monthly scans and removal updates",
        "Progress tracking and risk reports",
        "Automatic opt-outs from newly added data brokers",
        "Detailed removal reports with screenshots (every ~90 days)",
        "Family discounts (up to 40%)",
        "Email support",
      ],
    },
  },
  ultimate: {
    monthly: {
      name: "Ultimate",
      price: "7.99",
      description: "Premium privacy protection with advanced features",
      features: [
        "Includes all Pro features",
        "Automatic removal from 615+ data broker sites",
        "Weekly scans and removal updates",
        "Unlimited custom removal requests",
        "Unlimited name variations and past locations",
        "Dark web monitoring with real-time alerts for data breaches",
        "Family discounts (up to 50%)",
        "Priority 24/7 support",
      ],
    },
    annual: {
      name: "Ultimate",
      price: "5.99",
      description: "Premium privacy protection with advanced features",
      features: [
        "Includes all Pro features",
        "Automatic removal from 615+ data broker sites",
        "Weekly scans and removal updates",
        "Unlimited custom removal requests",
        "Unlimited name variations and past locations",
        "Dark web monitoring with real-time alerts for data breaches",
        "Family discounts (up to 50%)",
        "Priority 24/7 support",
      ],
    },
  },
};

export default function PricingTabs() {
  return (
    <Tabs defaultValue="monthly" className="w-full">
      <div className="flex flex-col items-center space-y-4 mb-8">
        <TabsList className="grid w-full max-w-md grid-cols-2 bg-[#f2f2f2]">
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="annual">Yearly</TabsTrigger>
        </TabsList>
      </div>

      {/* Monthly Plans */}
      <TabsContent value="monthly" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PricingCard plan={plans.free} />
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <PricingCard plan={plans.pro.monthly} variant="pro" />
          </motion.div>

          {/* Ultimate Plan (Most Popular) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PricingCard
              plan={plans.ultimate.monthly}
              variant="ultimate"
              popular
            />
          </motion.div>
        </div>
      </TabsContent>

      {/* Annual Plans */}
      <TabsContent value="annual" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PricingCard plan={plans.free} billing="annual" />
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <PricingCard
              plan={plans.pro.annual}
              variant="pro"
              billing="annual"
            />
          </motion.div>

          {/* Ultimate Plan (Most Popular) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PricingCard
              plan={plans.ultimate.annual}
              variant="ultimate"
              popular
              billing="annual"
            />
          </motion.div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
