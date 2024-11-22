// next-auth.d.ts
import NextAuth from "next-auth";
import { UserPlan } from "@/lib/authOptions";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      profileId?: string;
      plan?: UserPlan;
    };
  }

  interface User {
    id: string;
    profileId?: string;
    plan?: UserPlan;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    profileId?: string;
    plan?: UserPlan;
  }
}