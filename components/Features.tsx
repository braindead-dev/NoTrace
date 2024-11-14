"use client";

import { Card } from "@/components/ui/card";
import { Shield, Search, AlertCircle, RefreshCw, FileText, Bell } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: "Comprehensive Protection",
    description: "We scan and remove your data from 100+ data broker websites"
  },
  {
    icon: <Search className="h-6 w-6 text-blue-600" />,
    title: "Deep Web Scanning",
    description: "Advanced algorithms detect your information across the internet"
  },
  {
    icon: <AlertCircle className="h-6 w-6 text-blue-600" />,
    title: "Risk Assessment",
    description: "Detailed reports on potential privacy risks and exposures"
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-blue-600" />,
    title: "Continuous Monitoring",
    description: "Ongoing protection against new data exposures"
  },
  {
    icon: <FileText className="h-6 w-6 text-blue-600" />,
    title: "Detailed Reporting",
    description: "Monthly status updates on removal progress"
  },
  {
    icon: <Bell className="h-6 w-6 text-blue-600" />,
    title: "Instant Alerts",
    description: "Real-time notifications about new privacy threats"
  }
];

export default function Features() {
  return (
    <section className="w-full py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Comprehensive Privacy Protection
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground mt-4 text-lg">
            Our suite of privacy protection features keeps your personal information secure and under your control
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}