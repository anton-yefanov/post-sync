import Link from "next/link";
import { config } from "@/config";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col mx-auto gap-8 px-4 py-10 md:px-6 lg:py-16">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{config.appName}</h3>
            <p className="text-sm text-muted-foreground">
              {config.appDescription}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${config.supportEmail}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Support
                </a>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-muted-foreground hover:text-foreground"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tos"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {config.appName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
