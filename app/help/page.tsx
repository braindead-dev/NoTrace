"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Botpoison from "@botpoison/browser";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/components/FAQ";

const botpoison = new Botpoison({
  publicKey: process.env.NEXT_PUBLIC_BOTPOISON_PUBLIC_KEY!,
});

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function HelpCenterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);

      const { solution } = await botpoison.challenge();

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          _botpoison: solution,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <div className="min-h-screen pt-16 bg-background">

        {/* Hero Section */}
        <section className="relative pt-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900">
                Help Center
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                Find answers, guides, and support to resolve your questions quickly.
              </p>
            </motion.div>
          </div>
        </section>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1}}
        >
          <div className="flex flex-col items-center justify-start min-h-screen">
            {/* Main Content Section */}
            <div className="container flex flex-col max-w-6xl md:flex-row pt-12 pb-24 gap-6">
                {/* Contact Form Section */}
                <div className="w-full md:w-3/5">
                <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-center">Contact Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Form {...form}>
                          <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className="space-y-6"
                          >
                          <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                              <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                  <Input placeholder="edward@snowden.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                              </FormItem>
                              )}
                          />
                          <FormField
                              control={form.control}
                              name="subject"
                              render={({ field }) => (
                              <FormItem>
                                  <FormLabel>Subject</FormLabel>
                                  <FormControl>
                                  <Input placeholder="How can we help?" {...field} />
                                  </FormControl>
                                  <FormMessage />
                              </FormItem>
                              )}
                          />
                          <FormField
                              control={form.control}
                              name="message"
                              render={({ field }) => (
                              <FormItem>
                                  <FormLabel>Message</FormLabel>
                                  <FormControl>
                                  <Textarea
                                      placeholder="Tell us what's on your mind..."
                                      className="min-h-[150px]"
                                      {...field}
                                  />
                                  </FormControl>
                                  <FormMessage />
                              </FormItem>
                              )}
                          />
                          <Button type="submit" disabled={isSubmitting}>
                              {isSubmitting ? "Sending..." : "Send Message"}
                          </Button>
                          </form>
                      </Form>
                    </CardContent>
                </Card>
                </div>

                {/* FAQ Section */}
                <div className="w-full md:w-2/5">
                <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-center">FAQ</CardTitle>
                    </CardHeader>
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
                    >
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="no-underline hover:no-underline">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                    </Accordion>
                </Card>
                </div>
            </div>
          </div>
        </motion.div>
    </div>
  );
}
