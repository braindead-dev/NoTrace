import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PricingCard({ 
  plan, 
  popular = false, 
  variant,
  billing = "monthly"
}: { 
  plan: any; 
  popular?: boolean;
  variant?: "pro" | "family";
  billing?: "monthly" | "annual";
}) {
    return (
        <Card className={`relative p-8 h-full flex flex-col ${popular ? 'border-blue-600 border-2' : ''}`}>
          {popular && (
            <div className="absolute -top-3 -right-3">
              <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow-lg">
                Most Popular
              </span>
            </div>
          )}
          {plan.savings && (
            <div className="absolute -top-3 -right-3">
              <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full shadow-lg">
                Save {plan.savings}
              </span>
            </div>
          )}
    
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              {variant && (
                <span className={`text-sm font-medium px-2 py-1 rounded ${
                  variant === "family" 
                    ? "bg-purple-100 text-purple-600" 
                    : "bg-blue-100 text-blue-600"
                }`}>
                  {variant === "family" ? "Family" : "Individual"}
                </span>
              )}
            </div>
    
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="ml-1 text-muted-foreground">/month</span>
              {billing === "annual" && (
                <span className="ml-2 text-sm text-muted-foreground">(billed annually)</span>
              )}
            </div>
    
            <p className="text-muted-foreground">{plan.description}</p>
          </div>
    
          <div className="flex-grow">
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
    
          <Button 
            className={`w-full ${popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
          >
            {plan.price === "0" ? "Start Free" : "Get Started"}
          </Button>
        </Card>
      );
} 