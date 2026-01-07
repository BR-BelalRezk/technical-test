import Link from "next/link";
import cart from "@/public/icons/cart.svg";
import Image from "next/image";

export default function Cart() {
  return (
    <Link href={"#cart"}>
      <Image src={cart} alt="cart" />
    </Link>
  );
}
