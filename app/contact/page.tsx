"use client";

import { useState } from "react";
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

const faqs = [
  {
    question: "How does the automated data broker removal work?",
    answer: "Our system continuously scans major data broker websites for your personal information. When found, we automatically submit removal requests on your behalf using our proprietary technology. We track the removal process and verify that your information has been taken down."
  },
  {
    question: "How can I get full protection for my family?",
    answer: "Each paid plan allows you to add up to 5 family members at a highly discounted rate, compounding per member added. Each family member gets their own privacy dashboard, customized removal requests, and individual monitoring. You'll also get a comprehensive family privacy assessment and consolidated reporting."
  },
  {
    question: "How long does it take to remove my information?",
    answer: "Initial removal requests are typically processed within 24-48 hours. However, complete removal from data broker sites can take 30-45 days, as each broker has different removal processes and timeframes. We continuously monitor and verify removals throughout this period."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time. For monthly plans, you'll maintain access until the end of your current billing period. For annual plans, you can continue using the service until your subscription year ends."
  },
  {
    question: "What happens after I sign up?",
    answer: "After signing up, you'll complete a brief onboarding process to verify your identity and provide the information we need to protect. We'll immediately begin scanning for your data across broker sites and the dark web. You'll receive your first privacy report within 24 hours."
  },
  {
    question: "Is my personal information secure with your service?",
    answer: "Absolutely. We use bank-level encryption and security measures to protect your data. We never share your information with third parties, and our systems are regularly audited for security compliance. Your privacy and security are our top priority."
  }
];

const botpoison = new Botpoison({
  publicKey: process.env.NEXT_PUBLIC_BOTPOISON_PUBLIC_KEY!,
});

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
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
    <div className="flex items-start justify-center h-screen">
      <div className="container flex flex-col max-w-6xl md:flex-row py-24 gap-6">

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
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="no-underline hover:no-underline">{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                    </Accordion>
            </Card>
        </div>
      </div>
    </div>
  );
}
