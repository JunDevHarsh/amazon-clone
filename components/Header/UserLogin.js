import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";

const UserLogin = () => {
  const accountMenu = [
    {
      title: "Your Account",
      href: "account",
    },
    {
      title: "Your Orders",
      href: "account/your-orders",
    },
    {
      title: "Login & Security",
      href: "account/login-and-security",
    },
    {
      title: "Payment Options",
      href: "account/payment-option",
    },
    {
      title: "Amazon-clone Balance",
      href: "account/amazon-clone-balance",
    },
  ];
  return (
    <div className="relative border-[1px] border-transparent hover:border-white rounded-[0.25rem] py-[2px] px-2 flex flex-col items-center cursor-pointer dropdown-btn">
      <p className="text-white font-normal text-sm">Hello, Sign In</p>
      <div className="flex items-center">
        <p className="text-white font-medium text-sm">Account</p>
        <IoMdArrowDropdown className="text-white ml-[2px]" />
      </div>
      <div className="dropdown-content py-2 px-4 absolute top-full -right-8 w-60 h-auto rounded-md bg-[#f3f3f3] cursor-default opacity-0 pointer-events-none transition-opacity duration-700 z-20">
        <div className="absolute -top-[2px] right-[2.75rem] bg-inherit w-4 h-4 bg-[#f3f3f3] rotate-45"></div>
        <div className="flex flex-col items-center mt-2">
          <Link href={"/auth/sign-in"}>
            <a className="bg-gradient-to-b from-[#f8e3ad] to-[#eeba37] w-48 py-[6px] text-black text-center text-sm rounded-sm shadow-[0_0_0_1px_#b9ad72] z-10">
              Sign in
            </a>
          </Link>
          <div>
            <span className="text-[10px] text-[#6a6a6a] tracking-wider">
              New Customer?
            </span>
            <Link href={"/auth/sign-up"}>
              <a className="text-xs text-blue-500 ml-1 hover:text-[#e47911] hover:underline">
                Start here
              </a>
            </Link>
          </div>
        </div>
        <hr className="mt-1 border-b-[0.5px] border-b-solid border-b-[#f3f3f3]" />
        <div className="w-full px-2">
          <h3 className="font-medium text-black text-base tracking-wider mt-2">
            Your Account
          </h3>
          <ul className="w-full">
            {accountMenu.map((account) => (
              <li className="w-full my-1" key={account.title}>
                <Link href={`/${account.href}`}>
                  <a className="block text-[#6a6a6a] text-[13px] font-normal hover:text-[#e47911] hover:underline">
                    {account.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
