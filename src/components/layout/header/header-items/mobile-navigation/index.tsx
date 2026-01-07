import HeaderActions from "../header-actions";
import MainNavigation from "./main-navigation";

export default function MobileNavigation() {
  return (
    <div className="h-[58px] max-w-sm mx-auto lg:hidden shadow-2xl rounded-2xl backdrop-blur-md bg-white">
      <div className="size-full flex items-center justify-center">
        <HeaderActions className="flex items-center justify-evenly w-full">
          <MainNavigation />
        </HeaderActions>
      </div>
    </div>
  );
}
