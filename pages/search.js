import Head from "next/head";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const { category, item } = router.query;

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
      <main className="relative w-full bg-[#eaeded]">
        {`Search results for ${item} from ${category} category`}
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
