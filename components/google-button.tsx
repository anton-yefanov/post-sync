"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GoogleIcon from "@/public/icons/google-icon.svg";

export const GoogleButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onClickGoogleButton = () => {
    setIsLoading(true);
    signIn("google", {
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    }).finally(() => setIsLoading(false));
  };

  return (
    <Button onClick={onClickGoogleButton} size="lg" variant="outline">
      {isLoading ? (
        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        <Image src={GoogleIcon} alt="google_icon" />
      )}
      Sign up with Google
    </Button>
  );
};
