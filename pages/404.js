import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";
import AmazonLogo from "../public/assets/amazon-logo.svg";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Document Not Found | Amazon Clone</title>
        <link rel="icon" href="/assets/amazon-icon.webp" />
      </Head>
      <main className="w-full max-w-3xl mx-auto flex flex-col items-center mt-4">
        <Link href={"/"}>
          <a>
            <Image
              src={AmazonLogo}
              alt="amazon-logo-img"
              width={126}
              height={36}
            />
          </a>
        </Link>
        <div className="flex items-center max-w-3xl w-full mt-8">
          <div className="flex items-center justify-center">
            <AiOutlineQuestionCircle className="text-[#e47911] text-3xl font-semibold" />
          </div>
          <div className="ml-4 flex flex-col items-start">
            <h3 className="font-semibold text-lg text-[#e47911] tracking-wider">
              Looking for something?
            </h3>
            <p className="font-normal text-base tracking-wider">
              We're sorry. The Web address you entered is not a functioning page
              on our site.
            </p>
            <div className="flex items-center mt-2">
              <IoMdArrowDropright className="text-[#e47911] text-lg" />
              <p className="font-semibold text-base tracking-wider">
                Go to amazon-clone-dev.netlify.app's{" "}
                <Link href={"/"}>
                  <a className="underline text-blue-400 tracking-wider">Home</a>
                </Link>{" "}
                Page
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
