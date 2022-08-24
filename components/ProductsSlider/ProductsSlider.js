import Image from "next/image";
import Link from "next/link";
import Img from "../../public/preview/iphone-13-pro-max.jpg";

const ProductsSlider = () => {
  return (
    <div className="max-w-[90rem] w-full mx-auto p-4">
      <div className="relative w-full h-auto px-6 py-2 bg-white">
        <h3 className="text-[#0f1111] text-lg font-bold tracking-wider">
          Continue your shopping journey from here
        </h3>
        <div className="relative mt-4 grid grid-cols-[repeat(15,_1fr)] items-start h-48 w-full overflow-x-hidden hover:overflow-x-scroll gap-x-4 products-scroll">
          {[...Array(15)].map((_, index) => (
            <div key={index}>
              <Link href={`/product-${index}`}>
                <a>
                  <div className="relative w-[130px] h-[170px]">
                    <Image src={Img} layout="fill" alt="pihone" />
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSlider;
