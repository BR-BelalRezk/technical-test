"use client";
import { HTMLMotionProps, motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function PageWrapper(props: HTMLMotionProps<"div">) {
  const pathname = usePathname();
  return (
    <motion.div
      {...props}
      // className="overflow-x-hidden"
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    />
  );
}
