"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeSelect } from "../theme-select";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

export default function Navbar() {
  return (
    <header className="w-full border-b absolute top-0 z-40">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <span className="font-bold text-xl">PostSync</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#features" className="hover:underline">
              Features
            </Link>
            <Link href="#pricing" className="hover:underline">
              Pricing
            </Link>
            <Link href="#testimonials" className="hover:underline">
              Testimonials
            </Link>
            <Link href="#faq" className="hover:underline">
              FAQ
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline">Log In</Button>
            <ThemeSelect />
          </div>
          <Drawer>
            <DrawerTrigger className="md:hidden">
              <Menu className="size-6" />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Navigation</DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col p-4 gap-2">
                <Link href="#pricing" className="hover:underline">
                  Pricing
                </Link>
                <Link href="#faq" className="hover:underline">
                  FAQ
                </Link>
              </div>
              <DrawerFooter>
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
