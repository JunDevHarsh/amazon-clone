import { HiOutlineLocationMarker } from "react-icons/hi";

function Address() {
  return (
    <div className="flex flex-col items-start border-[1px] border-transparent hover:border-white rounded-[0.25rem] px-[2px] pt-[2px] pb-[5px] cursor-pointer">
      <p className="text-white opacity-75 text-[14px] tracking-wider pl-[18px]">
        Hello
      </p>
      <div className="flex items-center">
        <HiOutlineLocationMarker />
        <span className="text-white text-sm font-semibold tracking-wider">
          Patiala 147001
        </span>
      </div>
    </div>
  );
}

export default Address;
