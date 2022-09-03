import Head from "next/head";
import { useRouter } from "next/router";
import { GrPrevious } from "react-icons/gr";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MenuBar from "../components/MenuBar/MenuBar";
import AddToCart from "../components/Product/AddToCart";
import ImagesPreview from "../components/Product/ImagesPreview";
import ProductDetails from "../components/Product/ProductDetails";
import Products from "./api/products.json";

const Product = () => {
  const router = useRouter();
  const { item } = router.query;

  return (
    <div>
      <Head>
        <title>{item}</title>
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
      <main className="relative w-full bg-white">
        <Header />
        <MenuBar />
        <div className="w-full p-2">
          <button className="flex items-center" onClick={() => router.back()}>
            <GrPrevious className="w-2 h-2" />
            <span className="text-sm text-[#565959] font-medium ml-1 hover:underline">
              Back to results
            </span>
          </button>
        </div>
        <div className="flex items-start w-full h-auto px-4 my-4">
          <ImagesPreview images={Products[0].images} />
          <ProductDetails details={Products[0]} />
          <AddToCart outOfStock={Products[0].out_of_stock} />
        </div>
        <Footer />
      </main>
    </div>
  );
};

Product.getInitialProps = (appContext) => {
  return {
    id: appContext.query.id,
    title: appContext.query.title,
  };
};

export default Product;
