"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, Eraser, Eye } from "lucide-react";
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
            Clean Your Digital Footprint
            <span className="text-blue-600 block mt-2">Reclaim Your Privacy</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
            Effortlessly find and remove your personal information from the internet.
            Monitor your digital footprint across the broadest data broker coverage.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/signup" passHref> 
              <Button size="lg" className="px-8">
                Start Free Protection
              </Button>
            </Link>
            <Link href="#how-it-works" passHref> 
              <Button variant="outline" size="lg" className="hidden md:inline-flex">
                How It Works
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Total Control</h3>
              <p className="mt-2 text-muted-foreground">Your data, your rules, your privacy</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Eraser className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Data Scrubbing</h3>
              <p className="mt-2 text-muted-foreground">Advanced removal technology</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">24/7 Vigilance</h3>
              <p className="mt-2 text-muted-foreground">Continuous monitoring & protection</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}