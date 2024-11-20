import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Plus, Settings } from "lucide-react"

const familyMembers = [
  {
    name: "Sarah Smith",
    email: "sarah@example.com",
    role: "Admin",
    avatar: "/avatars/sarah.jpg",
    status: "Protected",
  },
  {
    name: "Mike Smith",
    email: "mike@example.com",
    role: "Member",
    avatar: "/avatars/mike.jpg",
    status: "At Risk",
  },
  {
    name: "Emma Smith",
    email: "emma@example.com",
    role: "Member",
    avatar: "/avatars/emma.jpg",
    status: "Protected",
  },
]

export default function Family() {
  return (
    <DashboardLayout>
        <DashboardHeader title="Family" />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Family Members</h2>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Family Member
            </Button>
          </div>

          <div className="grid gap-4">
            {familyMembers.map((member) => (
              <Card key={member.email}>
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant={member.status === "Protected" ? "default" : "destructive"}>
                      {member.status}
                    </Badge>
                    <Badge variant="secondary">{member.role}</Badge>
                    <Button variant="ghost" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Family Privacy Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold">78/100</p>
                  <Badge>Good</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your family's overall privacy score is good. There are a few areas that could use improvement.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
    </DashboardLayout>
  )
}