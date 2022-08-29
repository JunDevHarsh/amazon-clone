import Link from "next/link";
import { useContext, useRef, useState } from "react";
import { BackgroundContext } from "../../context/BackgroundContext";
import HamburgerMenuList from "./HamburgerMenuList";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const HamburgerMenu = () => {
  const { background, setBackground } = useContext(BackgroundContext);
  const [hamburgerMenuShift, setHamburgerMenuShift] = useState(false);
  const hamburgerMenuRef = useRef();

  const handleOpenHamburgerMenu = () => {
    // Open the hamburger menu when clicked
    // default value of hamdburgerMenuOpen is false
    setBackground((background) => !background);
  };

  const handleCloseHamburgerMenu = () => {
    // Close the hamburger menu when clicked outside the box
    setBackground((background) => !background);
    // if hamburger menu is shifted from its original place
    if (hamburgerMenuShift) {
      setHamburgerMenuShift((hamburgerMenuShift) => !hamburgerMenuShift);
    }
    // scroll the menu to the top while closing the hamburger menu to make user experience better
    hamburgerMenuRef.current.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleExpandedHamburgerMenu = (hasExpandedMenu) => {
    // If selected menu item has different menu than open it
    if (hasExpandedMenu) {
      // Shift to different menu
      setHamburgerMenuShift((hamburgerMenuShift) => !hamburgerMenuShift);
      // Scroll to top of the menu
      hamburgerMenuRef.current.scroll(0, 0);
    }
  };

  return (
    <>
      <div>
        <button
          onFocus={handleOpenHamburgerMenu}
          onBlur={handleCloseHamburgerMenu}
          className="flex items-center border border-transparent border-solid hover:border-white hover:cursor-pointer rounded-[4px] px-[6px] py-[4px]"
        >
          <AiOutlineMenu className="text-white" />
          <span className="ml-1 text-white text-sm">All</span>
          <div
            ref={hamburgerMenuRef}
            className={`fixed w-80 h-[100vh] top-0 left-0  transition-transform duration-700 overflow-x-hidden bg-[#fcfcfc] cursor-default z-20 ${
              background ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="w-full sticky top-0 left-0 h-[52px] bg-[#232f3e] z-10">
              <Link href="/auth/sign-in">
                <a>
                  <div className="relative w-full flex items-center justify-center p-3">
                    <FaUserCircle className="text-white text-lg" />
                    <p className="font-medium mx-4 text-xl text-white">
                      Hello. Sign In
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            <div
              className={`flex w-[40rem] transition-transform duration-300 py-4 ${
                hamburgerMenuShift ? "-translate-x-1/2" : ""
              }`}
            >
              <div className="w-80 flex items-start justify-start flex-col">
                {HamburgerMenuList.map((menuItem) => (
                  <div
                    className={`py-2 px-8 w-full text-left parent-forward-icon ${
                      menuItem.isTitle
                        ? "font-semibold text-black tracking-wider text-base"
                        : "text-gray-600 font-normal text-sm flex items-center justify-between cursor-pointer hover:bg-[#eaeded]"
                    }`}
                    onClick={() => handleExpandedHamburgerMenu(menuItem.isMenu)}
                    key={menuItem.id}
                  >
                    <span>{menuItem.itemName}</span>
                    {menuItem.isMenu && (
                      <IoIosArrowForward className="forward-icon" />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-start justify-start flex-col w-80">
                <div
                  className="py-2 px-8 w-full flex items-center hover:bg-[#eaeded] cursor-pointer"
                  onClick={() =>
                    setHamburgerMenuShift(
                      (hamburgerMenuShift) => !hamburgerMenuShift
                    )
                  }
                >
                  <IoIosArrowBack />
                  <span className="font-semibold text-black tracking-wider text-base ml-2">
                    Main Menu
                  </span>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default HamburgerMenu;
