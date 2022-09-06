import Head from "next/head";
import { useState } from "react";
import CartCheckout from "../components/Cart/CartCheckout";
import CartProducts from "../components/Cart/CartProducts";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MenuBar from "../components/MenuBar/MenuBar";
import Products from "./api/products.json";

const cart = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <Head>
        <title>Amazon-clone Shopping Cart</title>
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
      <main className="w-full relative">
        <Header />
        <MenuBar />
        <div className="p-2 bg-[#eaeded] w-full flex flex-row items-start justify-between gap-4">
          <CartProducts
            product={Products[0]}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <CartCheckout quantity={quantity} price={Products[0].price} />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default cart;
