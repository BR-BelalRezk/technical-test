import Image from "next/image";
import arrow from "@/public/icons/arrow.svg";

export default function Language() {
  return (
    <div className="flex items-center gap-1">
      <span className="text-sm font-medium text-brand-black-500">EN</span>
      <Image src={arrow} alt="arrow" />
    </div>
  );
}
