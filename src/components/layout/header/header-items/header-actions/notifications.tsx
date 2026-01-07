import Image from "next/image";
import notifications from "@/public/icons/notification.svg";

export default function Notifications() {
  return (
    <div>
      <Image src={notifications} alt="notifications" />
    </div>
  );
}
