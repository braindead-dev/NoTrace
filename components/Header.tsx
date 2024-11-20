"use client";

import Link from "next/link";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Features", href: "/#features" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Pricing", href: "/pricing" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full bg-white/80 backdrop-blur-sm z-50",
        scrolled ? "border-b" : ""
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-blue-600" />
            <span className="font-bold text-lg">NoTrace</span>
          </Link>

          <div className="hidden md:flex md:space-x-1 ml-10">
            {navigation.map((item) => {
              const isHashLink = item.href.startsWith("/#");
              const className = cn(
                "px-3 py-1.5 text-sm font-medium text-gray-700 rounded-full",
                "hover:bg-gray-100/80 hover:text-gray-900",
                "transition-colors duration-200"
              );

              return isHashLink ? (
                <a key={item.name} href={item.href} className={className}>
                  {item.name}
                </a>
              ) : (
                <Link key={item.name} href={item.href} className={className}>
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-x-4 ml-auto">
            <Link href="/login" passHref>
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup" passHref>
              <Button size="sm">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
