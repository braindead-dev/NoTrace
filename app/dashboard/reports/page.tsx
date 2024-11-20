"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { AppSidebar } from "@/components/dashboard/app-sidebar"

import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', exposures: 40 },
  { month: 'Feb', exposures: 35 },
  { month: 'Mar', exposures: 30 },
  { month: 'Apr', exposures: 25 },
  { month: 'May', exposures: 20 },
  { month: 'Jun', exposures: 15 },
]

export default function Reports() {
  return (
    <SidebarProvider className="bg-gray-50">
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader title="Reports" />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Total Exposures Found</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">127</p>
                <p className="text-sm text-muted-foreground">-12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Active Removals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">23</p>
                <p className="text-sm text-muted-foreground">In progress</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Privacy Score</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">82/100</p>
                <p className="text-sm text-muted-foreground">+5 points this month</p>
              </CardContent>
            </Card>
          </div>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Exposure Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="exposures" stroke="#2563eb" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}