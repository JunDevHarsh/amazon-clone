import Link from "next/link";

const AccountModal = ({ title, href, text, image }) => {
  return (
    <div className="p-4 w-80 h-20 bg-white hover:bg-[#eee] border border-[#d5d9d9] border-solid rounded-md cursor-pointer">
      <Link href={`/account/${href}`}>
        <div className="w-full flex items-start gap-4">
          <img src={`./icons/${image}.png`} alt="icon-of-pad" />
          <div className="flex flex-col items-start">
            <h3 className="text-black text-lg font-medium tracking-wider">
              {title}
            </h3>
            <p className="text-[#565959] text-sm font-normal tracking-wider">
              {text}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AccountModal;
