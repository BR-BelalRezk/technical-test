"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";

export default function HeaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollY } = useScroll();

  const [show, setShow] = useState(true);
  const [isLg, setIsLg] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  // Detect lg breakpoint (1024px)
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsLg(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  // Scroll logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;

    // Mobile behavior
    if (!isLg) {
      if (latest > prev && latest > 80) {
        setShow(false);
      } else {
        setShow(true);
      }
    }

    // Desktop shadow behavior
    if (isLg) {
      setHasShadow(latest > 0);
    }
  });

  return (
    <motion.header
      initial={false}
      animate={{
        y: !isLg ? (show ? 0 : 100) : 0,
        boxShadow: isLg
          ? hasShadow
            ? "0 4px 20px rgba(0,0,0,0.08)"
            : "0 0 0 rgba(0,0,0,0)"
          : "none",
      }}
      transition={{
        y: { duration: 0.3, ease: "easeInOut" },
        boxShadow: { duration: 0.5, ease: "linear" },
      }}
      className="fixed left-0 z-50 w-full bottom-5 lg:top-0 lg:bottom-auto lg:bg-white"
    >
      <nav className="container mx-auto">{children}</nav>
    </motion.header>
  );
}
