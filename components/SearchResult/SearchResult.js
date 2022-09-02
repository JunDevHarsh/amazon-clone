import Products from "../../pages/api/products.json";
import Link from "next/link";
import Image from "next/image";
import RatingStar from "./RatingStar";
import Pagination from "./Pagination";

const SearchResult = () => {
  return (
    <div className="flex flex-col items-start p-4 bg-white w-full gap-3">
      <div className="flex flex-row items-center">
        <p className="font-semibold text-lg tracking-wider uppercase">
          Results
        </p>
      </div>
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="w-full flex flex-row items-start rounded-sm shadow-[0_0_1px_1px_#d9d9d9] bg-white"
        >
          <div className="w-1/4 min-w-[15rem] flex items-center justify-center shadow-[1px_0_1px_0_#d9d9d9] cursor-pointer">
            <Link href={`/${Products[0].id}`}>
              <a>
                <Image
                  className="w-full"
                  src={`/mobile/${Products[0].images[0]}.jpg`}
                  width={240}
                  height={240}
                  alt={`${Products[0].title}-img`}
                />
              </a>
            </Link>
          </div>
          <div className="w-3/4 flex flex-col items-start gap-2 p-4">
            <Link href={`/${Products[0].id}`}>
              <a className="font-medium text-lg tracking-wider hover:text-[#c45500]">
                {Products[0].title}
              </a>
            </Link>
            <RatingStar ratings={Products[0].ratings} />
            <div className="relative w-full flex items-end">
              <Link href={`/${Products[0].id}`}>
                <a>
                  <span className="absolute top-0.5 left-0 w-2 h-2 font-light text-[#515252] text-sm">
                    &#8377;
                  </span>
                  <span className="ml-2 font-semibold text-2xl text-[#0f1111] tracking-wider">
                    {Products[0].price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                </a>
              </Link>
            </div>
            <p className="text-sm tracking-wide">
              Free Delivery by Amazon-clone
            </p>
          </div>
        </div>
      ))}
      <Pagination />
    </div>
  );
};

export default SearchResult;
