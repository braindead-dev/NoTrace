"use client";

import Link from "next/link";
import Logo from "@/components/icons/Logo";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/app/signup/components/user-auth-form";

export default function SignupPage() {
  return (
    <div className="container relative h-screen flex flex-col items-center pt-28 px-4 md:pt-0 md:px-0 md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-6"
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 pt-8 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-blue-600" />
        <Link
          href="/"
          className="relative z-20 flex items-center text-lg font-medium"
        >
          <Logo className="mr-2 h-6 w-6" />
          NoTrace
        </Link>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;NoTrace has given me complete control over my digital privacy. 
              I finally feel secure knowing my personal information is protected.&rdquo;
            </p>
            <footer className="text-sm">Alex Chen, Privacy Advocate</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full max-w-xs flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Start for free
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign up for an account to manage your privacy
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By continuing, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
