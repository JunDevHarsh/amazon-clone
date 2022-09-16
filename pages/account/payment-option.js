import Head from "next/head";
import Link from "next/link";
import { useState, useRef } from "react";
import { GrFormNext } from "react-icons/gr";
import Card from "../../components/Card/Card";
import SavedCard from "../../components/Card/SavedCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";

const PaymentOption = () => {
  const [cards, setCards] = useState([
    {
      card_number: "1234 1234 1234 1234",
      user_name: "User Name 1",
      expiry_month: "9",
      expiry_year: "2022",
    },
  ]);
  const cardRef = useRef(null);
  const cardNumberRef = useRef(null);
  const cardNameRef = useRef(null);
  const cardMonthRef = useRef(null);
  const cardYearRef = useRef(null);

  // change visibility of card component
  // when user wants to add the card or vice-versa
  const handleCardVisibility = () => {
    cardNumberRef.current.value = "";
    cardNameRef.current.value = "";
    cardMonthRef.current.value = "9";
    cardYearRef.current.value = "2022";
    if (cardRef.current.style.display === "block") {
      return (cardRef.current.style.display = "none");
    }
    return (cardRef.current.style.display = "block");
  };

  return (
    <div>
      <Head>
        <title>Manage Payment Methods</title>
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
                Manage Payment Methods
              </span>
            </div>
            <div className="w-full my-4">
              <h2 className="text-black text-3xl font-normal tracking-wider">
                Your Payment Options
              </h2>
              {/* Saved card component */}
              <SavedCard cards={cards} />
              {/* Add new payment method */}
              <div className="w-full">
                <h3 className="text-black text-xl font-medium tracking-wider">
                  Add a New Payment Method
                </h3>
                <button
                  onClick={handleCardVisibility}
                  className="px-4 py-1 my-2 bg-white hover:bg-[#f7fafa] border border-solid border-[#d5d9d9] rounded-md shadow-[0_2px_5px_0_#d5d9d980] text-black text-sm font-normal"
                >
                  Add a card
                </button>
                <Card
                  cardRef={cardRef}
                  cardNumberRef={cardNumberRef}
                  cardNameRef={cardNameRef}
                  cardMonthRef={cardMonthRef}
                  cardYearRef={cardYearRef}
                  handleCardVisibility={handleCardVisibility}
                  setCards={setCards}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default PaymentOption;
