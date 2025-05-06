import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { DEFAULT_UNAUTHORIZED_REDIRECT, publicRoutes } from "@/routes";
import { NextResponse } from "next/server";

export const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const url = req.nextUrl;
  const isApiAuthRoute = url.pathname.startsWith("/api/auth");
  const isPublicRoute = publicRoutes.includes(url.pathname);
  const isCheckoutRoute = url.pathname.startsWith("/checkout/");

  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  if (!isLoggedIn && !isPublicRoute && !isCheckoutRoute) {
    return NextResponse.redirect(new URL(DEFAULT_UNAUTHORIZED_REDIRECT, url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
