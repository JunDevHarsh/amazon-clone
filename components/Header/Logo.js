import Image from "next/image";
import Link from "next/link";
import AmazonLogo from "../../public/assets/amazon-logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center relative max-w-[8.125rem] border-[1px] border-transparent hover:border-white rounded-[0.25rem] overflow-hidden">
      <Link href="/">
        <a>
          <Image
            src={AmazonLogo}
            width={130}
            height={40}
            alt="amazon-logo-img"
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
