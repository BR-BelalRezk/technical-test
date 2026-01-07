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
        width={66}
        height={51}
      />
    </figure>
  );
}
