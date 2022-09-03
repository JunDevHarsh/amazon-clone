import { RiHandCoinLine } from "react-icons/ri";
import { TbReplace } from "react-icons/tb";
import { FaShuttleVan } from "react-icons/fa";
import { BiCheckShield } from "react-icons/bi";

const IconWidgets = () => {
  const icon_data = [
    {
      icon_name: RiHandCoinLine,
      icon_title: "Cash on Delivery",
    },
    {
      icon_name: TbReplace,
      icon_title: "7 Day Replacement",
    },
    {
      icon_name: FaShuttleVan,
      icon_title: "Amazon-clone Delivery",
    },
    {
      icon_name: BiCheckShield,
      icon_title: "Warranty",
    },
  ];
  return (
    <div className="w-full flex items-start gap-2 my-4">
      {icon_data.map((Data) => (
        <div
          className="flex flex-col items-center gap-2 w-24"
          key={Data.icon_name}
        >
          <Data.icon_name className="w-6 h-6" />
          <span className="text-xs text-[#007185] text-center hover:text-[#C7511F] cursor-pointer font-normal tracking-wider">
            {Data.icon_title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default IconWidgets;
