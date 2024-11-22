"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const CACHE_KEY = "user_session_cache";

type CachedSession = {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    plan?: {
      type: "free" | "pro" | "ultimate";
      billing?: "monthly" | "annual";
      startDate: string;
      endDate?: string;
    };
  };
  expires: string;
};

export function useCachedSession() {
  const { data: session, status } = useSession();

  // Synchronously read from localStorage during state initialization
  const [cachedData, setCachedData] = useState<CachedSession | null>(() => {
    if (typeof window !== "undefined") {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        try {
          const parsed = JSON.parse(cached) as CachedSession;
          // Check if cache is still valid
          if (new Date(parsed.expires) > new Date()) {
            return parsed;
          } else {
            localStorage.removeItem(CACHE_KEY);
          }
        } catch (error) {
          console.error("Error parsing cached session:", error);
          localStorage.removeItem(CACHE_KEY);
        }
      }
    }
    return null;
  });

  // Update cache when session changes
  useEffect(() => {
    if (session?.user) {
      const cacheData: CachedSession = {
        user: {
          name: session.user.name,
          email: session.user.email,
          image: session.user.image,
          plan: session.user.plan
            ? {
                type: session.user.plan.type,
                billing: session.user.plan.billing,
                startDate:
                  session.user.plan.startDate instanceof Date
                    ? session.user.plan.startDate.toISOString()
                    : session.user.plan.startDate,
                endDate:
                  session.user.plan.endDate instanceof Date
                    ? session.user.plan.endDate.toISOString()
                    : session.user.plan.endDate,
              }
            : undefined,
        },
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
      setCachedData(cacheData);
    }
  }, [session]);

  // Clear cache on logout
  useEffect(() => {
    if (status === "unauthenticated") {
      localStorage.removeItem(CACHE_KEY);
      setCachedData(null);
    }
  }, [status]);

  // Return either the active session or cached data as fallback
  return {
    session: session || cachedData,
    status: session || cachedData ? "authenticated" : status,
    isLoading: status === "loading" && !session && !cachedData,
  };
}