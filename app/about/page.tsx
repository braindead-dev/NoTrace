"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Search, RefreshCw, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FAQ from "@/components/FAQ";
import Image from 'next/image';

const values = [
  {
    title: "Transparency",
    description: "We keep it clear and simple. Your data is yours, always.",
    icon: <Lock className="h-10 w-10 text-blue-600" />
  },
  {
    title: "Innovation",
    description: "Cutting-edge tools to help you reclaim control over your online presence.",
    icon: <RefreshCw className="h-10 w-10 text-blue-600" />
  },
  {
    title: "Commitment",
    description: "We're here to fight for your privacy, every step of the way.",
    icon: <Shield className="h-10 w-10 text-blue-600" />
  }
];

export default function AboutPage() {
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
              We're All About Privacy
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              At NoTrace, we believe privacy is a fundamental right. Our mission is to provide everyone with the tools to manage their digital footprint, enabling them to safeguard their personal information and reclaim control over their online identity.
            </p>
          </motion.div>
        </div>
      </section>

 
      
      {/* What We Do Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="h-8 w-8 text-blue-600" />,
                title: "Data Scanning",
                description: "Identify where your personal data is stored online."
              },
              {
                icon: <RefreshCw className="h-8 w-8 text-blue-600" />,
                title: "Automated Removals",
                description: "Streamline the opt-out process with minimal effort."
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "Ongoing Monitoring",
                description: "Regular updates to ensure your data stays private."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center p-6">
                  <CardContent>
                    <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
              Meet the Founder
            </h2>
          </div>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="text-center overflow-hidden">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                    <Image
                      src="/images/founder.jpeg"
                      width={24}
                      height={24}
                      unoptimized={true}
                      alt="Henry Wang"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">Henry Wang</h3>
                  <p className="text-gray-600 mb-4">CEO & Founder</p>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://www.linkedin.com/in/henry00c/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="h-5 w-5 mr-2" />
                      View Profile
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="pt-10">
        <FAQ />
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Join the Privacy Movement
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              We're building a safer digital world—one data removal at a time.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary">
                View Open Roles
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-blue-700 hover:text-white">
                <Mail className="mr-2 h-4 w-4" /> Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}