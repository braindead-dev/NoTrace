"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Search, Eraser, Bell } from "lucide-react";

const steps = [
  {
    icon: <ClipboardCheck className="h-8 w-8 text-blue-600" />,
    title: "Sign Up & Submit",
    description: "Create your account and provide the information you want removed from data brokers."
  },
  {
    icon: <Search className="h-8 w-8 text-blue-600" />,
    title: "We Scan & Locate",
    description: "Our system scans hundreds of data broker websites to find your exposed information."
  },
  {
    icon: <Eraser className="h-8 w-8 text-blue-600" />,
    title: "Automated Removal",
    description: "We automatically submit removal requests to all identified data brokers."
  },
  {
    icon: <Bell className="h-8 w-8 text-blue-600" />,
    title: "Ongoing Monitoring",
    description: "We continuously monitor and remove any new instances of your data."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How OptMeOut Works
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground mt-4 text-lg">
            Our simple 4-step process keeps your personal information private and secure
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100 hidden md:block" />
          
          <div className="space-y-[-35px] relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}