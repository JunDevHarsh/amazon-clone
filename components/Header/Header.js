import { useState } from "react";
import AddressTab from "./AddressTab";
import LocationModal from "./LocationModal";
import Logo from "./Logo";

function Header() {
  const [showLocationModal, setShowLocationModal] = useState(false);

  return (
    <div className="py-2 px-2 flex items-center bg-very-dark-blue h-[60px]">
      <Logo />
      <AddressTab openModal={setShowLocationModal} />
      <LocationModal
        showModal={showLocationModal}
        closeModal={setShowLocationModal}
      />
    </div>
  );
}

export default Header;
