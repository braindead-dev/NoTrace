"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function CTA() {
  return (
    <section className="w-full py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Shield className="h-16 w-16 mx-auto text-white mb-6" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Ready to Protect Your Privacy?
          </h2>
          <p className="mx-auto max-w-[700px] text-blue-100 mt-4 text-lg">
            Join thousands who trust OptMeOut to keep their information private and secure.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Start Your Protection
            </Button>
          </div>
          <p className="mt-5 text-sm text-blue-200">
            30-day money-back guarantee • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}