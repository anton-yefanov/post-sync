import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 text-sm">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that&#39;s right for your social media needs
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3">
          <div className="flex flex-col p-6 shadow-lg rounded-lg border">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Starter</h3>
              <p>Perfect for individuals and small businesses</p>
            </div>
            <div className="mt-4">
              <span className="text-4xl font-bold">$9</span>
              <span>/month</span>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                <span>3 social media accounts</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                <span>30 scheduled posts per month</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                <span>Basic analytics</span>
              </li>
            </ul>
            <Button className="mt-6">Get Started</Button>
          </div>
          <div className="flex flex-col p-6 shadow-lg rounded-lg border relative">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Pro</h3>
              <p>Ideal for growing businesses</p>
            </div>
            <div className="mt-4">
              <span className="text-4xl font-bold">$19</span>
              <span>/month</span>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                <span>10 social media accounts</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                <span>100 scheduled posts per month</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                <span>Content calendar</span>
              </li>
            </ul>
            <Button className="mt-6">Get Started</Button>
          </div>
          <div className="flex flex-col p-6 shadow-lg rounded-lg border">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Business</h3>
              <p>For agencies and large organizations</p>
            </div>
            <div className="mt-4">
              <span className="text-4xl font-bold">$49</span>
              <span>/month</span>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                <span>Unlimited social accounts</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                <span>Unlimited scheduled posts</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                <span>Premium analytics & reporting</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                <span>Team collaboration tools</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                <span>API access</span>
              </li>
            </ul>
            <Button className="mt-6">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
