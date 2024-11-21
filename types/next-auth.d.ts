// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      profileId?: string; // Add custom field
    };
  }

  interface User {
    id: string; // Include the ID from the database
    profileId?: string; // Add custom field
  }
}