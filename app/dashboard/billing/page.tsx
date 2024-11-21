import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function Billing() {
  return (
    <DashboardLayout>
        <DashboardHeader title="Billing" />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        </div>
    </DashboardLayout>
  )
}