"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import Statuses from "./statuses";

export default function HeroSection() {
  const session = useSession();
  const imageSrc = "/js-chan.png";

  return (
    <section className="w-full py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <Statuses />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              One Tool for All Your Social Media Posting
            </h1>
            <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Save time and streamline your social media strategy. Post to all
              your platforms with a single click.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href={
                  session.status === "authenticated"
                    ? DEFAULT_LOGIN_REDIRECT
                    : "/login"
                }
              >
                <Button size="lg" disabled={session.status === "loading"}>
                  {session.status === "authenticated"
                    ? "Continue"
                    : "Get Started"}
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                See Demo
              </Button>
            </div>
          </div>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg shadow-xl overflow-hidden">
            <Image
              src={imageSrc}
              alt="Dashboard Preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
