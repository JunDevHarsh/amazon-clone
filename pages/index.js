import Head from "next/head";
import Header from "../components/Header/Header";

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
        <link rel="icon" href="/assets/amazon-icon.webp" />
      </Head>
      <Header />
    </div>
  );
};

export default Home;
