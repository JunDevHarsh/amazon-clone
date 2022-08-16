import Address from "./Adress";
import Logo from "./Logo";

function Header() {
  return (
    <div className="py-2 px-2 flex items-center bg-very-dark-blue h-[60px]">
      <Logo />
      <Address />
    </div>
  );
}

export default Header;
