import { useTransitionRouter } from "next-view-transitions";

export const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0.5,
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

export const usePageTransitionRouter = () => {
  const router = useTransitionRouter();
  return (href: string) =>
    router.push(href, {
      onTransitionReady: pageAnimation,
    });
};
