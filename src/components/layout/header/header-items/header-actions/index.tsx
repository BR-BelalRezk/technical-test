import Cart from "./cart";
import Favourites from "./favourites";
import Language from "./language";
import Notifications from "./notifications";
import Profile from "./profile";

type props = {
  children?: React.ReactNode;
  className?: string;
};

const actions = [
  <Cart />,
  <Notifications />,
  <Favourites />,
  <Language />,
  <Profile />,
];

export default function HeaderActions({ children, className }: props) {
  return (
    <ul className={className}>
      {actions.map((action, index) => (
        <li key={index}>{action}</li>
      ))}
      <li>{children}</li>
    </ul>
  );
}
