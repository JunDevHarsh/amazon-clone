import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { GrFormNext } from "react-icons/gr";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";

const AmazonCloneBalance = () => {
  const [balance, setBalance] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(500);
  const amount = [500, 1000, 5000, 10000];

  return (
    <div>
      <Head>
        <title>Amazon-clone: Top-up your balance</title>
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
                Manage your balance
              </span>
            </div>
            <div className="w-full my-2 border border-solid border-[#ddd] rounded-md overflow-hidden">
              <div className="px-6 py-4 bg-white">
                <h2 className="text-black text-2xl font-medium tracking-wider">
                  Add Credits to your Amazon-clone Balance
                </h2>
                <p className="text-black text-lg font-medium tracking-wider my-1">
                  Credits Balance:
                  <span
                    className={`ml-1
                      ${balance !== 0 ? "text-[#007600]" : "text-red-700"}
                    `}
                  >
                    &#8377;{balance.toFixed(2)}
                  </span>
                </p>
                <div className="w-full border-t border-t-[#e9e9e9] border-solid my-4"></div>
                <div className="w-full">
                  <h4 className="text-black text-sm font-medium tracking-wider">
                    Choose an amount:
                  </h4>
                  <ul className="flex items-center gap-4 mt-2">
                    {amount.map((amt) => (
                      <li
                        key={amt}
                        onClick={() =>
                          setSelectedAmount((prev) => amt + prev - prev)
                        }
                        className={`w-24 px-2 py-1 text-center text-black text-sm border border-solid tracking-wider ${
                          selectedAmount === amt
                            ? "bg-[#fef8f2] font-medium border-[#e77600]"
                            : "bg-white hover:bg-[#f3f3f3] font-normal border-[#adb1b8] hover:border-[#a2a6ac]"
                        } rounded-md cursor-pointer`}
                      >
                        &#8377;{amt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full text-center py-6 px-8 bg-gradient-to-b from-[#f3f3f3] to-[#fff] border-t border-t-[#d9d9d9] border-solid">
                <Link href="/account">
                  <a className="text-black text-sm font-normal tracking-wider px-3 py-1.5 border border-solid border-[#a88734] hover:border-[#a88734] rounded-md bg-gradient-to-b from-[#f7dfa5] to-[#f0c14b] hover:from-[#f5d78e] hover:to-[#eeb933]">
                    Continue
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default AmazonCloneBalance;
