import Head from "next/head";
import DesktopCarousel from "../components/Carousel/DesktopCarousel";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MenuBar from "../components/MenuBar/MenuBar";
import PreviewContainer from "../components/PreviewContainer/PreviewContainer";
import ProductsSlider from "../components/ProductsSlider/ProductsSlider";

const Home = () => {
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
      <main className="relative w-full bg-[#eaeded]">
        <Header />
        <MenuBar />
        <div className="relative w-full">
          <DesktopCarousel />
          <PreviewContainer />
          <ProductsSlider />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Home;
