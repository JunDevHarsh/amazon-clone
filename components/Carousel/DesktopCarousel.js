import { useState } from "react";
import Image from "next/image";
import { GrPrevious, GrNext } from "react-icons/gr";

const DesktopCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const NUMBER_OF_IMAGES = 5;

  const nextImageSlide = () =>
    setImageIndex((prev) => (prev + 1) % NUMBER_OF_IMAGES);

  const prevImageSlide = () =>
    setImageIndex((prev) => (prev - 1 + NUMBER_OF_IMAGES) % NUMBER_OF_IMAGES);

  return (
    <div className="relative w-full h-full">
      <div className="relative flex items-center">
        <Image
          src={`/desktop-images/desktop-img-${imageIndex}.jpg`}
          alt={`desktop-preview-${imageIndex}-img`}
          width={1440}
          height={600}
        />
      </div>
      <button
        onClick={prevImageSlide}
        className="absolute top-0 left-0 h-60 w-20 flex items-center justify-center rounded-md border-4 border-transparent focus:border-[#008296]"
      >
        <GrPrevious className="w-8 h-8 prev-icon" />
      </button>
      <button
        onClick={nextImageSlide}
        className="absolute top-0 right-0 h-60 w-20 flex items-center justify-center rounded-md border-4 border-transparent focus:border-[#008296]"
      >
        <GrNext className="w-8 h-8 next-icon" />
      </button>
    </div>
  );
};

export default DesktopCarousel;
