import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PreviewSlideBox = () => {
  const PRODUCT_TEXT_LENGTH = 70;
  const slideItemList = [
    {
      title: "apple-adapter",
      text: "Apple 20W USB-C Power Adapter (for iPhone, iPad & AirPods)",
      price: 1690,
      mrp: 1900,
    },
    {
      title: "oneplus-10-pro",
      text: "OnePlus 10 Pro 5G (Emerald Forest, 12GB RAM, 256GB Storage)",
      price: 66999,
      mrp: 72999,
    },
    {
      title: "oneplus-10r",
      text: "OnePlus 10R 5G (Forest Green, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
      price: 34999,
      mrp: 38999,
    },
    {
      title: "redmi-note-11t",
      text: "Redmi Note 11T 5G (Stardust White, 6GB RAM, 128GB ROM)| Dimensity 810 5G | 33W Pro Fast Charging | Charger Included",
      price: 15999,
      mrp: 20999,
    },
  ];
  const [selectedSlideProduct, setSelectedSlideProduct] = useState({
    title: "apple-adapter",
    text: "Apple 20W USB-C Power Adapter (for iPhone, iPad & AirPods)",
    price: 1690,
    mrp: 1900,
  });

  return (
    <div className="p-4 bg-white w-80 h-auto">
      <h3 className="text-[#0f1111] text-lg font-bold tracking-wider">
        Keep shopping for
      </h3>
      <div className="flex flex-col items-center mt-4">
        <Link href={`/${selectedSlideProduct.title}`}>
          <a>
            <div className="flex flex-col items-center">
              <Image
                src={`/preview/${selectedSlideProduct.title}.jpg`}
                height={160}
                width={100}
                alt={`${selectedSlideProduct.title}-img`}
              />
              <p className="my-2 text-sm font-medium text-[#515252]">
                {selectedSlideProduct.text.length > PRODUCT_TEXT_LENGTH
                  ? selectedSlideProduct.text.slice(0, PRODUCT_TEXT_LENGTH) +
                    "..."
                  : selectedSlideProduct.text}
              </p>
            </div>
          </a>
        </Link>

        <div className="relative w-full flex items-end">
          <span className="absolute top-0 left-0 w-2 h-2 font-light text-[#515252] text-sm">
            &#8377;
          </span>
          <span className="ml-2 font-semibold text-xl text-[#0f1111] tracking-wider">
            {selectedSlideProduct.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
          <span className="pb-[2px] pl-1 line-through font-normal text-xs text-[#515252] tracking-wider">
            M.R.P: &#8377;
            {selectedSlideProduct.mrp
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
        <div className="flex items-center gap-1 w-full mt-3">
          {slideItemList.map((slideItem, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() =>
                setSelectedSlideProduct((_) => ({
                  title: slideItemList[slideIndex].title,
                  text: slideItemList[slideIndex].text,
                  price: slideItemList[slideIndex].price,
                  mrp: slideItemList[slideIndex].mrp,
                }))
              }
              className={`py-2 w-1/4 flex items-center justify-center border-[1px] border-solid cursor-pointer outline-none focus:shadow-[0_0_3px_2px_#e4791180] focus:bg-[#fef8f2] ${
                selectedSlideProduct.title === slideItem.title
                  ? "border-[#e77600]"
                  : "border-[#a2a6ac]"
              }`}
            >
              <Image
                src={`/preview/${slideItem.title}.jpg`}
                height={70}
                width={56}
                alt={`${slideItem.title}-img`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewSlideBox;
