import { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const Pagination = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const MAX_TOTAL_ITEMS = 50; // default max items
  const TOTAL_PAGE_ITEMS = 10; // default total items in single page

  return (
    <div className="relative w-full flex items-center justify-center">
      <ul className="w-auto flex items-center border border-solid border-[#d5d9d9] rounded-md">
        <li
          onClick={() => setCurrentIndex((prev) => prev - 1)}
          className={`flex items-center px-4 py-2.5 ${
            currentIndex === 1
              ? "pointer-events-none text-[#6f7373]"
              : "pointer-events-auto text-[#0f1111] hover:bg-[#f5f6f6] cursor-pointer"
          }`}
        >
          <GrPrevious className="w-2 h-2" />
          <span className="text-sm font-normal ml-1">Previous</span>
        </li>
        {[...Array(Math.floor(MAX_TOTAL_ITEMS / TOTAL_PAGE_ITEMS))].map(
          (_, idx) => (
            <li
              key={idx}
              onClick={() => setCurrentIndex((prev) => prev + (idx + 1) - prev)}
              className={`py-2 px-4 ${
                currentIndex === idx + 1
                  ? "border border-solid border-black"
                  : "hover:bg-[#f5f6f6] cursor-pointer border-none"
              } text-base font-normal text-black`}
            >
              {idx + 1}
            </li>
          )
        )}
        <li
          onClick={() => setCurrentIndex((prev) => prev + 1)}
          className={`flex items-center py-2.5 px-4 ${
            currentIndex === Math.floor(MAX_TOTAL_ITEMS / TOTAL_PAGE_ITEMS)
              ? "pointer-events-none text-[#6f7373]"
              : "pointer-events-auto text-[#0f1111] hover:bg-[#f5f6f6] cursor-pointer"
          }`}
        >
          <span className="text-sm font-normal mr-1">Next</span>
          <GrNext className="w-2 h-2" />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
