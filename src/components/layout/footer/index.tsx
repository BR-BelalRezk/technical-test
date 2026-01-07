import { Button } from "@/components/ui/shadcn/button";
import { Input } from "@/components/ui/shadcn/input";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/public/icons/facebook.svg";
import twitter from "@/public/icons/twitter.svg";
import instagram from "@/public/icons/instagram.svg";
import linkedin from "@/public/icons/linkedin.svg";
import telegram from "@/public/icons/telegram.svg";
import comboShape from "@/public/icons/combo-shape.svg";
import footerBG from "@/public/images/footer-bg.png";
import Logo from "@/components/ui/logo";

const helpLinks = [
  { label: "My Account", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Categories", href: "#" },
  { label: "All Products", href: "#" },
];

const policyLinks = [
  { label: "Refund Policy", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Cancellation Policy", href: "#" },
  { label: "Terms and Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const socialIcons = [
  { icon: facebook, alt: "Facebook" },
  { icon: twitter, alt: "Twitter" },
  { icon: instagram, alt: "Instagram" },
  { icon: linkedin, alt: "LinkedIn" },
  { icon: comboShape, alt: "YouTube" },
  { icon: telegram, alt: "Telegram" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white">
      {/* Background image */}
      <Image
        src={footerBG}
        alt="Footer background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative container mx-auto py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 w-full">
          {/* Brand */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <Logo />
            <p className="text-sm leading-relaxed text-white/70">
              Ipsam in eos qui consequatur ab cum maxime. Soluta dolor quae
              ipsam in eos qui consequatur ab cum maxime.
            </p>
          </div>

          {/* Help */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-lg font-semibold">Let Us Help</h3>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-lg font-semibold">Policies</h3>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div className="md:col-span-3 flex flex-col gap-8">
            {/* Newsletter */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Email Newsletter</h3>
              <div className="relative flex">
                <Input
                  type="email"
                  placeholder="Email address"
                  className="h-12 rounded-xl pr-32 text-sm text-black"
                />
                <Button className="absolute right-1 top-1/2 h-10 -translate-y-1/2 rounded-lg bg-pink px-5 text-sm font-semibold text-white hover:bg-pink/90">
                  Send
                </Button>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="mb-3 text-sm font-semibold">Follow Us</h4>
              <div className="flex items-center gap-4">
                {socialIcons.map((social) => (
                  <Link
                    key={social.alt}
                    href="#"
                    className="h-6 w-6 opacity-80 transition hover:opacity-100"
                  >
                    <Image
                      src={social.icon}
                      alt={social.alt}
                      className="h-full w-full"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} TT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
