import Image from "next/image";
import logo from "@/public/logo.svg";

export default function Logo() {
  return (
    <figure>
      <Image
        src={logo}
        alt="logo"
        priority
        quality={100}
        width={100}
        height={100}
      />
    </figure>
  );
}
