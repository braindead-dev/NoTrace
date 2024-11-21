import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PricingCard({
  plan,
  popular = false,
  variant,
  billing = "monthly",
}: {
  plan: any;
  popular?: boolean;
  variant?: "pro" | "ultimate";
  billing?: "monthly" | "annual";
}) {
  return (
    <Card
      className={`relative p-8 h-full flex flex-col ${
        popular ? "border-blue-600 border-2" : ""
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 -right-3">
          <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">{plan.name}</h3>
          {variant && (
            <span
              className={`text-sm font-medium px-2 py-1 rounded ${
                variant === "ultimate"
                  ? "bg-purple-100 text-purple-600"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </span>
          )}
        </div>

        {/* Pricing */}
        <div className="mb-4">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold">
              {plan.price === "0" ? "Free" : `$${plan.price}`}
            </span>
            {plan.price !== "0" && (
              <span className="ml-1 text-muted-foreground">/month</span>
            )}
          </div>
          {billing === "annual" && plan.price !== "0" && (
            <div className="text-xs text-muted-foreground mt-2">
              (billed annually)
            </div>
          )}
        </div>
        <p className="text-muted-foreground">{plan.description}</p>
      </div>

      {/* Features */}
      <div className="flex-grow">
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start">
              <Check
                className={`h-5 w-5 mr-2 flex-shrink-0 mt-0.5 ${
                  plan.price === "0"
                    ? "text-gray-500"
                    : variant === "ultimate"
                    ? "text-blue-600"
                    : "text-blue-400"
                }`}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <Button
        className={`w-full ${
          plan.price !== "0"
            ? "bg-blue-700 hover:bg-blue-800"
            : "bg-gray-500 hover:bg-gray-600"
        }`}
      >
        {plan.price === "0" ? "Start Free" : "Get Started"}
      </Button>
    </Card>
  );
}
