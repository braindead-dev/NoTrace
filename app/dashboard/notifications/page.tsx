import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Shield, AlertTriangle } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "New Data Exposure Found",
    description: "Your information was found on a new data broker site.",
    date: "2 hours ago",
    type: "alert",
    icon: AlertTriangle,
  },
  {
    id: 2,
    title: "Removal Request Complete",
    description: "Your data has been successfully removed from DataBroker.com",
    date: "1 day ago",
    type: "success",
    icon: Shield,
  },
  {
    id: 3,
    title: "Monthly Privacy Report",
    description: "Your January 2024 privacy report is now available.",
    date: "3 days ago",
    type: "info",
    icon: Bell,
  },
];

export default function Notifications() {
  return (
    <DashboardLayout>
      <DashboardHeader title="Notifications" />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Notifications</CardTitle>
                <CardDescription>
                  Stay updated on your privacy protection status.
                </CardDescription>
              </div>
              <Button variant="outline">Mark All as Read</Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-start space-x-4 p-4 rounded-lg border"
              >
                <div
                  className={`rounded-full p-2 ${
                    notification.type === "alert"
                      ? "bg-red-100 text-red-600"
                      : notification.type === "success"
                      ? "bg-green-100 text-green-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  <notification.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{notification.title}</p>
                    <Badge variant="secondary">{notification.date}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>
              Customize how you receive notifications.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Email Notifications</h4>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via email
                  </p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Push Notifications</h4>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications in your browser
                  </p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">SMS Notifications</h4>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via text message
                  </p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}