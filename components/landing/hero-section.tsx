"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              One Tool for All Your Social Media Posting
            </h1>
            <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Save time and streamline your social media strategy. Post to all
              your platforms with a single click.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                See Demo
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 relative">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg shadow-xl overflow-hidden">
              <div className="absolute inset-0 backdrop-blur-sm">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-xl font-medium">Dashboard Preview</p>
                  <p className="text-sm">Image placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
