"use client";

import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import PricingTabs from "@/components/pricing/PricingTabs";
import FAQ from "@/components/FAQ";

import { features } from "@/components/Pricing";

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-14 bg-background">
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

      <FAQ />

    </div>
  );
}