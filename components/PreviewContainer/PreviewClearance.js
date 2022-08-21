import Image from "next/image";
import Link from "next/link";

const PreviewClearance = () => {
  return (
    <div className="p-4 bg-white w-80 h-auto">
      <h3 className="text-[#0f1111] text-lg font-bold tracking-wider mb-4">
        Up to 45% off | Top offers from Amazon Brand
      </h3>
      <div className="flex flex-col items-center">
        <Link href="/amazon-brand-offers">
          <a>
            <Image
              src="/preview/sofa.jpg"
              width={270}
              height={278}
              alt="sofa-img"
            />
          </a>
        </Link>
      </div>
      <Link href="/see-more">
        <a className="text-[#007185] text-sm font-normal block mt-3 tracking-wide no-underline hover:text-[#C7511F] hover:underline">
          See more
        </a>
      </Link>
    </div>
  );
};

export default PreviewClearance;
