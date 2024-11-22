"use client";

import * as React from "react";
import {
  Users,
  UserCog,
  LifeBuoy,
  Send,
  FileChartColumnIncreasing,
  LayoutDashboard,
  House,
} from "lucide-react";
import { useCachedSession } from "@/hooks/use-cached-session";

import { NavMain } from "@/components/dashboard/nav-main";
import { NavSecondary } from "@/components/dashboard/nav-secondary";
import { NavUser } from "@/components/dashboard/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Logo from "@/components/icons/Logo";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Reports",
      url: "/dashboard/reports",
      icon: FileChartColumnIncreasing,
    },
    {
      title: "Manage Profile",
      url: "/dashboard/profile",
      icon: UserCog,
    },
    {
      title: "Manage Family",
      url: "/dashboard/family",
      icon: Users,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/dashboard/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/dashboard/feedback",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { session, isLoading } = useCachedSession();
  const planType = session?.user?.plan?.type || "free";

  // Mapping object for plan styles and display texts
  const planStyles = {
    free: {
      backgroundColor: "bg-white",
      logoColor: "text-blue-600",
      shadow: "shadow-md border border-gray-200",
      displayText: "Free Plan",
    },
    pro: {
      backgroundColor: "bg-blue-600",
      logoColor: "text-white",
      shadow: "",
      displayText: "Pro Plan",
    },
    ultimate: {
      backgroundColor: "bg-indigo-700",
      logoColor: "text-white",
      shadow: "",
      displayText: "Ultimate Plan",
    },
  };

  const planStyle = planStyles[planType] || planStyles["free"];

  if (isLoading) {
    return (
      <Sidebar variant="inset" {...props}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="animate-pulse flex items-center space-x-4 w-full p-2">
                <div className="h-8 w-8 bg-gray-200 rounded-lg"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
      </Sidebar>
    );
  }

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" asChild>
                  <div className="cursor-pointer">
                    <div
                      className={`flex aspect-square h-8 w-8 items-center justify-center rounded-lg ${planStyle.backgroundColor} ${planStyle.logoColor} ${planStyle.shadow}`}
                    >
                      <Logo className="h-4 w-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">NoTrace</span>
                      <span className="truncate text-xs">
                        {planStyle.displayText}
                      </span>
                    </div>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width]"
                align="start"
              >
                <DropdownMenuItem asChild className="cursor-pointer">
                  <a href="/">
                    <House className="h-4 w-4 mr-2" />
                    Homepage
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}