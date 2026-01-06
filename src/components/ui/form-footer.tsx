import TransitionLink from "../animation/elements/transition-link";
import { Button } from "./shadcn/button";
import Link from "next/link";

type props = {
  isLoading: boolean;
  type: "login" | "register";
};

export default function FormFooter({ isLoading, type }: props) {
  const buttonText = type === "login" ? "Sign In" : "Create Account";
  const buttonLoadingText =
    type === "login" ? "Signing in..." : "Creating account...";
  const pText =
    type === "login" ? "Don't have an account?" : "Already have an account?";
  const pLinkText = type === "login" ? "Create account" : "Sign in";
  const pLinkHref = type === "login" ? "register" : "login";
  return (
    <>
      <Button
        type="submit"
        className="w-full bg-pink text-stone-700 hover:bg-pink/90"
        disabled={isLoading}
      >
        {isLoading ? buttonLoadingText : buttonText}
      </Button>

      {/* Register Link */}
      <p className="text-center text-sm text-muted-foreground flex items-center gap-3 justify-center">
        {pText}
        <TransitionLink
          href={pLinkHref}
          className="text-primary hover:underline font-medium"
        >
          {pLinkText}
        </TransitionLink>
      </p>
    </>
  );
}
