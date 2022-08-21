import Head from "next/head";
import { useState } from "react";
import DesktopCarousel from "../components/Carousel/DesktopCarousel";
import Header from "../components/Header/Header";
import MenuBar from "../components/MenuBar/MenuBar";
import PreviewContainer from "../components/PreviewContainer/PreviewContainer";

const Home = () => {
  const [background, setBackground] = useState(false);
  const [backgroundMain, setBackgroundMain] = useState(false);

  return (
    <div>
      <Head>
        <title>Online Shopping Website | Amazon Clone</title>
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
      <main className="relative w-full">
        <div
          className={`w-full h-full absolute top-0 left-0 bg-[#000000cc] ${
            backgroundMain ? "z-10" : "-z-10"
          }`}
        ></div>
        <Header background={background} setBackground={setBackground} />
        <MenuBar
          backgroundMain={backgroundMain}
          setBackgroundMain={setBackgroundMain}
        />
        <div className="relative w-full">
          <div
            className={`absolute top-0 left-0 w-full h-full bg-[#000000cc] ${
              background ? "z-10" : "-z-10"
            }`}
          ></div>
          <DesktopCarousel />
          <PreviewContainer />
        </div>
      </main>
    </div>
  );
};

export default Home;
