"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "./Button";

/**
 * NextJS does not allow to pass function from server -> client components,
 * hence this unreusable component.
 */

interface SignInButtonProps {}

export const SignInButton = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signIn("google");
    } catch (error) {
      // toast({
      //   title: "Error signing in",
      //   message: "Please try again later.",
      //   type: "error",
      // });
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};