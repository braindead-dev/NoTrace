import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./mongodb";
import { ObjectId } from "mongodb";
import { v4 as uuidv4 } from "uuid";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      // Attach user ID and custom fields to the session object
      if (session.user) {
        session.user.id = user.id;
        session.user.profileId = user.profileId;
      }
      return session;
    },
  },
  events: {
    async createUser({ user }) {
      // Add additional fields to the user document upon creation
      try {
        const client = await clientPromise;
        const db = client.db();

        const usersCollection = db.collection("users");

        await usersCollection.updateOne(
          { _id: new ObjectId(user.id) },
          {
            $set: {
              profileId: uuidv4(),
              createdAt: new Date(),
              // Add other custom fields as needed
            },
          }
        );
      } catch (error) {
        console.error("Error in createUser event:", error);
      }
    },
  },
  pages: {
    signIn: "/login",
    error: "/login", // Redirect to the login page on error
  },
  secret: process.env.NEXTAUTH_SECRET,
};
