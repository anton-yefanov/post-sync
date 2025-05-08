"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { config } from "@/config";
import { useRouter } from "next/navigation";

export function CheckoutHeader() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center gap-4">
      <Button variant="outline" className="size-[32px]" onClick={handleGoBack}>
        <ChevronLeft />
      </Button>
      <span className="font-semibold">{config.appName}</span>
    </div>
  );
}
