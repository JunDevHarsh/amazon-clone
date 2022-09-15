import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import { GrFormNext } from "react-icons/gr";

const LoginAndSecurity = () => {
  const userDetails = [
    {
      title: "Name",
      value: "User name",
      isPassword: false,
    },
    {
      title: "E-mail",
      value: "useremail@email.com",
      isPassword: false,
    },
    {
      title: "Password",
      value: "user123",
      isPassword: true,
    },
  ];
  return (
    <div>
      <Head>
        <title>Amazon-clone Change Email, Name, Password</title>
        <meta
          name="description"
          content="Amazon-clone: The goal of this project is to make a clone of the world's largest e-commerce website i.e. Amazon.in by using next-js."
        />
        <meta
          name="keywords"
          content="amazon-clone, amazon, e-commerce shopping, next-js"
        />
        <meta name="google" content="nositelinkssearchbox" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/icons/amazon-icon.webp" />
      </Head>
      <main className="relative bg-white w-full">
        <Header />
        <MenuBar />
        <div className="w-full">
          <div className="max-w-2xl w-full mx-auto p-4">
            <div className="flex items-center">
              <Link href="/account">
                <a className="text-[#0066c0] hover:text-[#c45500] text-sm font-normal tracking-wide no-underline hover:underline">
                  Your Account
                </a>
              </Link>
              <GrFormNext className="mx-1 h-3 w-3" />
              <span className="text-[#c45500] text-sm font-normal tracking-wide">
                Login &#38; Security
              </span>
            </div>
            <div className="w-full my-2">
              <h2 className="text-black text-2xl font-normal tracking-wider">
                Login &#38; Security
              </h2>
              <div className="w-full border border-[#ddd] border-solid rounded-sm my-3">
                {userDetails.map((detail, detailIndex) => (
                  <div
                    key={detail.title}
                    className={`flex items-center justify-between p-4 ${
                      detailIndex !== userDetails.length - 1
                        ? "border-b border-solid border-b-[#ddd]"
                        : ""
                    }`}
                  >
                    <div className="flex flex-col items-start">
                      <p className="text-black text-sm font-medium tracking-wide">
                        {detail.title}:
                      </p>
                      <p className="text-black text-sm font-normal tracking-wide">
                        {detail.isPassword ? "********" : detail.value}
                      </p>
                    </div>
                    <button className="text-black text-sm font-normal tracking-wider px-3 py-1.5 border border-[#adb1b8] hover:border-[#a2a6ac] border-solid rounded-md bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] hover:from-[#e7eaf0] hover:to-[#d9dce1]">
                      Edit
                    </button>
                  </div>
                ))}
              </div>
              <Link href="/account">
                <a className="text-black text-sm font-normal tracking-wider px-3 py-1.5 border border-solid border-[#a88734] hover:border-[#a88734] rounded-md bg-gradient-to-b from-[#f7dfa5] to-[#f0c14b] hover:from-[#f5d78e] hover:to-[#eeb933]">
                  Done
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default LoginAndSecurity;
