import FooterMenu from "./FooterMenu";
import AmazonLogo from "../../public/logo/amazon-logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative w-full bg-[#232f3e]">
      <a
        href="#header"
        className="reltive block py-4 w-full text-center text-sm font-medium text-white tracking-wider bg-[#37475A] hover:bg-[#485769]"
      >
        Back to top
      </a>
      <FooterMenu />
      <div className="w-full mt-4 border-[1px] border-solid border-[#3a4553]"></div>
      <div className="py-4 w-full flex items-center justify-center">
        <Link href="/">
          <a>
            <Image src={AmazonLogo} width={75} height={45} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
