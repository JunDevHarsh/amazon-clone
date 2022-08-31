import Head from "next/head";
import { useRouter } from "next/router";
import SearchResultHeader from "../components/SearchResult/SearchResultHeader";
import FilterSidebar from "../components/SearchResult/FilterSidebar";
import SearchResult from "../components/SearchResult/SearchResult";
import Header from "../components/Header/Header";
import MenuBar from "../components/MenuBar/MenuBar";
import Footer from "../components/Footer/Footer";

const Search = () => {
  const router = useRouter();
  const { item } = router.query;

  return (
    <div>
      <Head>
        <title>{`Amazon-clone: ${item}`}</title>
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
        <SearchResultHeader searchItem={item} />
        <div className="flex items-start w-full mt-2">
          <FilterSidebar />
          <SearchResult />
        </div>
        <Footer />
      </main>
    </div>
  );
};

Search.getInitialProps = (appContext) => {
  return {
    id: appContext.query.item,
  };
};

export default Search;
