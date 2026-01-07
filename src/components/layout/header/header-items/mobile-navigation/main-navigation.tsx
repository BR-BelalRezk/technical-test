import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/shadcn/sheet";
import Image from "next/image";
import hamburger from "@/public/icons/hamburger.svg";
import { navItems } from "@/constants";
import Link from "next/link";
export default function MainNavigation() {
  return (
    <Sheet>
      <SheetTrigger>
        <Image src={hamburger} alt="hamburger" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Main Menu</SheetTitle>
        </SheetHeader>
        <ul className="size-full flex items-start pl-5 justify-start gap-5 flex-col text-sm font-normal text-brand-black-200">
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
      </SheetContent>
    </Sheet>
  );
}
