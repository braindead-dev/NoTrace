"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import PricingCard from "@/components/pricing/PricingCard";

export const plans = {
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
      description: "Protection for up to 5 family members",
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
      description: "Protection for up to 5 family members",
      features: [
        "Everything in Pro plan",
        "Up to 5 family members",
        "Family dashboard",
        "Family privacy assessment"
      ]
    }
  }
};

export default function PricingTabs() {
  return (
    <Tabs defaultValue="monthly" className="w-full">
        <div className="flex flex-col items-center space-y-4 mb-8">
        <TabsList className="grid w-full max-w-md grid-cols-2 bg-[#f2f2f2]">
            <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
            <TabsTrigger value="annual">Annual Billing</TabsTrigger>
        </TabsList>
        </div>

        <TabsContent value="monthly" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >                <PricingCard plan={plans.free} />
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            >                <PricingCard 
                plan={plans.individual.monthly} 
                variant="pro"
            />
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            >                <PricingCard 
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
  );
}