"use client";

import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-16 pb-32">
      <div className="absolute inset-0 bg-grid-slate-100/[0.03] bg-[size:75px_75px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Take Back Control of Your
            <span className="text-blue-600"> Digital Privacy</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Automatically remove and monitor your personal information from data broker websites. 
            Protect your privacy with our comprehensive removal service.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="px-8">
              Start Protection
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Continuous Protection</h3>
              <p className="mt-2 text-muted-foreground">24/7 monitoring of your digital presence</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Secure & Private</h3>
              <p className="mt-2 text-muted-foreground">Bank-level encryption for your data</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Full Transparency</h3>
              <p className="mt-2 text-muted-foreground">Track removal progress in real-time</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}