// lib/authOptions.ts
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./mongodb";
import { ObjectId } from "mongodb";
import { v4 as uuidv4 } from "uuid";

export type UserPlan = {
  type: "free" | "pro" | "ultimate";
  billing?: "monthly" | "annual"; // Only for pro and ultimate plans
  startDate: Date;
  endDate?: Date; // For subscription end date
};

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.profileId = user.profileId;
        
        // Add plan information to the token
        const client = await clientPromise;
        const db = client.db();
        const dbUser = await db.collection("users").findOne({ _id: new ObjectId(user.id) });
        if (dbUser?.plan) {
          token.plan = dbUser.plan;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id as string;
        session.user.profileId = token.profileId as string | undefined;
        session.user.plan = token.plan as UserPlan | undefined;
      }
      return session;
    },
  },
  events: {
    async createUser({ user }) {
      try {
        const client = await clientPromise;
        const db = client.db();

        const usersCollection = db.collection("users");

        // Set up default free plan for new users
        const defaultPlan: UserPlan = {
          type: "free",
          startDate: new Date(),
        };

        await usersCollection.updateOne(
          { _id: new ObjectId(user.id) },
          {
            $set: {
              profileId: uuidv4(),
              createdAt: new Date(),
              plan: defaultPlan,
            },
          }
        );
      } catch (error) {
        console.error("Error in createUser event:", error);
        throw error;
      }
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};