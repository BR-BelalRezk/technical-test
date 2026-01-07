import type { Metadata } from "next";
import "@/styles/globals.css";
import { Toaster } from "sonner";
import { cn } from "@/utils";
import { ViewTransitions } from "next-view-transitions";
import Providers from "@/providers";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "TinyTales",
  description: "E-commerce App",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={cn("antialiased bg-brand-white", poppins.className)}>
          <Providers>{children}</Providers>
          <Toaster
            position="top-center"
            richColors
            toastOptions={{
              style: {
                background: "var(--color-stone-100)",
                color: "var(--color-stone-95  0)",
                border: "1px solid var(--color-stone-300)",
              },
            }}
          />
        </body>
      </html>
    </ViewTransitions>
  );
}
