import { useState } from "react";
import AddressTab from "./AddressTab";
import LanguageTab from "./LanguageTab";
import LocationModal from "./LocationModal";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

function Header() {
  const [showLocationModal, setShowLocationModal] = useState(false);

  return (
    <div className="py-2 px-2 flex items-center bg-very-dark-blue h-[60px]">
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
    </div>
  );
}

export default Header;
