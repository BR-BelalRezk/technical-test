import HeaderWrapper from "./header-items/header-wrapper";
import MobileNavigation from "./header-items/mobile-navigation";
import DesktopNavigation from "./header-items/desktop-navigation";
import Logo from "@/components/ui/logo";

export default function Header() {
  return (
    <>
      <div className="lg:hidden bg-white h-[100px] w-full flex items-center justify-center">
        <Logo />
      </div>
      <HeaderWrapper>
        <MobileNavigation />
        <DesktopNavigation />
      </HeaderWrapper>
    </>
  );
}
