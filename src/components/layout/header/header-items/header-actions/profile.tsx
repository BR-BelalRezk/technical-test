import TransitionLink from "@/components/animation/elements/transition-link";
import { getAuthCookie } from "@/services/actions";
import profile from "@/public/icons/profile.svg";
import arrow from "@/public/icons/arrow.svg";
import Image from "next/image";

export default async function Profile() {
  const token = await getAuthCookie();
  const isAuth = !!token;

  return isAuth ? (
    <div className="flex items-center gap-1">
      <Image src={profile} alt="profile" />
      <Image src={arrow} alt="arrow" />
    </div>
  ) : (
    <TransitionLink href={"login"}>profile</TransitionLink>
  );
}
