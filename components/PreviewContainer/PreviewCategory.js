import Image from "next/image";
import Link from "next/link";

const PreviewCategory = () => {
  const categoryItemlist = ["fresh", "mobiles", "fashion", "electronics"];
  return (
    <div className="p-4 bg-white w-80 h-auto">
      <h3 className="text-[#0f1111] text-lg font-bold tracking-wider">
        Shop by category
      </h3>
      <div className="flex items-center justify-around flex-wrap gap-2">
        {categoryItemlist.map((categoryItem, categoryIndex) => (
          <div
            key={`${categoryItem}-${categoryIndex}`}
            className="relative flex flex-col items-center mt-1"
          >
            <Link href={`/${categoryItem}`}>
              <a>
                <div className="relative w-[7.3rem] h-[8.56rem]">
                  <Image
                    src={`/preview/${categoryItem}-preview-icon.jpg`}
                    layout="fill"
                    objectFit="contain"
                    alt={`${categoryItem}-img`}
                  />
                </div>
                <p className="text-sm text-[#0f1111] font-medium tracking-wider">
                  {`${categoryItem}`}
                </p>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <Link href="/see-more">
        <a className="text-[#007185] text-sm font-normal block mt-3 tracking-wide no-underline hover:text-[#C7511F] hover:underline">
          See more
        </a>
      </Link>
    </div>
  );
};

export default PreviewCategory;
