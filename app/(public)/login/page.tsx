"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GoogleButton } from "@/components/google-button";
import { config } from "@/config";

export default function Page() {
  const [email, setEmail] = useState("");

  return (
    <section className="flex flex-col w-full h-screen items-center justify-center gap-4 px-8">
      <Card className="w-full max-w-lg rounded-3xl p-8 md:px-12 gap-0 pb-16">
        <Link
          href="/"
          title="Back to homepage"
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2">
            {config.appLogo}
            <span className="font-bold text-xl">{config.appName}</span>
          </div>
        </Link>
        <GoogleButton />
        <div className="flex items-center w-full my-8">
          <div className="flex-grow h-px bg-border"></div>
          <span className="px-4 text-sm text-gray-500">or</span>
          <div className="flex-grow h-px bg-border"></div>
        </div>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2"
        />
        <Button size="lg" className="w-full p-4 rounded-lg text-white mt-2">
          Sign up with email
        </Button>
      </Card>
      <p className="text-center text-sm text-gray-500 mt-4">
        By signing up, you agree to our{" "}
        <Link href="/tos" target="_blank" className="hover:underline">
          Terms of Service
        </Link>
        .
      </p>
    </section>
  );
}
