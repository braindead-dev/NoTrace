import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import PricingTabs from "@/components/pricing/PricingTabs";

export default function Upgrade() {
  return (
    <DashboardLayout>
      <DashboardHeader title="Upgrade" />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0 px-14">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Upgrade Your Privacy Protection
          </h2>
          <p className="text-muted-foreground mt-2">
            Choose the perfect plan to enhance your privacy protection
          </p>
        </div>
        <PricingTabs />
      </div>
    </DashboardLayout>
  );
}