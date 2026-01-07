import Logo from "@/components/ui/logo";
import HeaderActions from "../header-actions";
import Image from "next/image";
import { navItems } from "@/constants";
import Link from "next/link";

export default function DesktopNavigation() {
  return (
    <div className="hidden lg:block h-[91px] w-full">
      <div className="size-full flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo />
          <ul className="flex items-center justify-start gap-5 text-sm font-normal text-brand-black-200">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="flex items-center gap-2">
                  <Image src={item.icon} alt={item.name} />
                  <span className="text-sm font-medium text-brand-black">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <HeaderActions className="flex items-center justify-center gap-5" />
      </div>
    </div>
  );
}
