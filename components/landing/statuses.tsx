"use client";

import { Badge } from "@/components/ui/badge";
import { useSession } from "next-auth/react";

export default function Statuses() {
  return (
    <div className="flex gap-1">
      <AuthStatus />
      <SubscriptionStatus />
    </div>
  );
}

const SubscriptionStatus = () => {
  const session = useSession();

  return (
    <Badge
      variant={
        session.status === "loading"
          ? "secondary"
          : session.status === "authenticated"
            ? "default"
            : "outline"
      }
    >
      {session.status === "loading"
        ? "Loading..."
        : session.status === "authenticated"
          ? session.data.user?.name
          : "Unauth"}
    </Badge>
  );
};

const AuthStatus = () => {
  const session = useSession();

  return (
    <Badge
      variant={
        session.status === "loading"
          ? "secondary"
          : session.status === "authenticated"
            ? "default"
            : "outline"
      }
    >
      {session.status === "loading"
        ? "Loading..."
        : session.status === "authenticated"
          ? session.data.user?.name
          : "Unauth"}
    </Badge>
  );
};
