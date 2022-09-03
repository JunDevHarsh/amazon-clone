import Image from "next/image";
import { useState } from "react";

const ImagesPreview = ({ images }) => {
  const [previewIndex, setPreviewIndex] = useState(0);

  const changeImageIndex = (index) => {
    if (index === previewIndex) {
      return;
    }
    setPreviewIndex((prev) => prev + index - prev);
  };

  return (
    <div className="w-5/12 flex flex-start sticky top-0 h-full">
      <ul className="flex flex-col items-center gap-2 mt-4">
        {images.map((image, imageIdx) => (
          <li
            key={image}
            onMouseEnter={() => changeImageIndex(imageIdx)}
            className={`p-0.5 border border-solid ${
              previewIndex === imageIdx
                ? "border-[#e77600] shadow-[0_0_3px_2px_#e4791180]"
                : "border-[#a2a6ac]"
            } rounded-sm flex items-center justify-center cursor-pointer`}
          >
            <Image
              src={`/mobile/${image}.jpg`}
              width={38}
              height={50}
              alt={`${image}-img`}
            />
          </li>
        ))}
      </ul>
      <div className="w-auto h-full">
        <div className="p-4">
          <Image
            src={`/mobile/${images[previewIndex]}.jpg`}
            width={385}
            height={400}
            alt={`${images[previewIndex]}-img`}
          />
        </div>
      </div>
    </div>
  );
};

export default ImagesPreview;
