"use client";
import { useTransitionRouter } from "next-view-transitions";
import { pageAnimation } from "../functions";
import Link from "next/link";

export default function TransitionLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const router = useTransitionRouter();
  return (
    <Link
      className={className}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        router.push(`/${href}`, {
          onTransitionReady: pageAnimation,
        });
      }}
    >
      {children}
    </Link>
  );
}
