import Link from "next/link";
import Image from "next/image";
import favourites from "@/public/icons/favourite.svg";

export default function Favourites() {
  return (
    <Link href={"#favourites"}>
      <Image src={favourites} alt="favourites" />
    </Link>
  );
}
    