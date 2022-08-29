import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import IndianFlag from "../../public/logo/india.svg";

const LanguageTab = () => {
  return (
    <div className="border-[1px] border-transparent hover:border-white rounded-[0.25rem]">
      <div className="dropdown-btn relative flex items-end justify-between mx-2 py-3 w-11 cursor-pointer">
        <Image src={IndianFlag} width={24} height={16} alt="india-flag-img" />
        <IoMdArrowDropdown className="text-gray-200" />
        <div className="dropdown-content w-64 flex flex-col items-start rounded-md bg-[#f3f3f3] p-3 absolute -left-4 top-full opacity-0 pointer-events-none transition-opacity duration-700 z-20">
          <span
            id="arrow"
            className="bg-[#f3f3f3] absolute left-[18%] -top-1 -translate-x-[18%] rotate-45 w-4 h-4"
          ></span>
          <ul className="w-full">
            <li className="flex items-center w-full pointer-events-none">
              <div className="w-4 h-4 border-[1px] border-solid border-gray-400 rounded-[50%] flex items-center justify-center">
                <div className="w-[6px] h-[6px] bg-[#e47911] rounded-[50%]"></div>
              </div>
              <p className="text-slate-800 text-xs ml-2 tracking-wider">
                English - EN
              </p>
            </li>
            <hr className="w-[87%] ml-auto my-2" />
            <li className="flex items-center w-full">
              <Image
                src={IndianFlag}
                width={16}
                height={12}
                alt="indian-flag-img"
              />
              <p className="text-slate-800 ml-2 text-xs tracking-wider">
                You are shopping on amazon-clone
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LanguageTab;
