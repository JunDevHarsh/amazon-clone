import { useState } from "react";
import Logo from "./Logo";
import AddressTab from "./AddressTab";
import LocationModal from "./LocationModal";
import SearchBar from "../SearchBar/SearchBar";
import LanguageTab from "./LanguageTab";
import UserLogin from "./UserLogin";
import Cart from "./Cart";

function Header() {
  const [showLocationModal, setShowLocationModal] = useState(false);

  return (
    <div
      className="py-2 px-2 flex items-center bg-very-dark-blue h-[60px]"
      id="header"
    >
      <Logo />
      <AddressTab
        modalStatus={showLocationModal}
        openModal={setShowLocationModal}
      />
      <LocationModal
        showModal={showLocationModal}
        closeModal={setShowLocationModal}
      />
      <SearchBar />
      <LanguageTab />
      <UserLogin />
      <div className="flex flex-col items-start border-[1px] border-transparent hover:border-white rounded-[0.25rem] py-[1px] px-2 cursor-pointer">
        <p className="font-normal text-sm text-white">Returns</p>
        <p className="font-medium text-base- text-white tracking-wider -mt-1">
          &#38; Orders
        </p>
      </div>
      <Cart />
    </div>
  );
}

export default Header;
