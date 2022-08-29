import HamburgerMenu from "./HamburgerMenu";
import MenuList from "./MenuList";

const MenuBar = () => {
  return (
    <div className="w-full flex items-center px-2 py-1 bg-[#232f3e]">
      <HamburgerMenu />
      <MenuList />
    </div>
  );
};

export default MenuBar;
