"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeSelect } from "../theme-select";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { config } from "@/config";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const session = useSession();

  return (
    <header className="w-full border-b absolute top-0 z-40">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {config.appLogo}
              <span className="font-bold text-xl">{config.appName}</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#pricing" className="hover:underline">
              Pricing
            </Link>
            <Link href="#faq" className="hover:underline">
              FAQ
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href={
                session.status === "authenticated"
                  ? DEFAULT_LOGIN_REDIRECT
                  : "/login"
              }
            >
              <Button
                size="lg"
                variant="outline"
                disabled={session.status === "loading"}
              >
                {session.status === "authenticated" ? "Continue" : "Log In"}
              </Button>
            </Link>
            <ThemeSelect />
          </div>
          <Drawer>
            <DrawerTrigger className="md:hidden">
              <Menu className="size-6" />
            </DrawerTrigger>
            <DrawerContent onCloseAutoFocus={(e) => e.preventDefault()}>
              <DrawerHeader>
                <DrawerTitle>Navigation</DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col p-4 gap-2">
                <DrawerClose asChild>
                  <Link href="#pricing" className="hover:underline">
                    Pricing
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href="#faq" className="hover:underline">
                    FAQ
                  </Link>
                </DrawerClose>
              </div>
              <DrawerFooter>
                <Link
                  href={
                    session.status === "authenticated"
                      ? DEFAULT_LOGIN_REDIRECT
                      : "/login"
                  }
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full"
                    disabled={session.status === "loading"}
                  >
                    {session.status === "authenticated" ? "Continue" : "Log In"}
                  </Button>
                </Link>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
