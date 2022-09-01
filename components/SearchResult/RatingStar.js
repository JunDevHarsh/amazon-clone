import { useEffect, useRef, useState } from "react";
import { MdStarHalf, MdStarOutline, MdStar } from "react-icons/md";

const RatingStar = ({ ratings }) => {
  const [remainder, setRemainder] = useState(0);
  const [quotient, setQuotient] = useState(0);
  const isMounted = useRef(false);

  const showRatings = (ratings) => {
    let scoreTotalRatings = Object.values(ratings).reduce(
      (acc, curr, index) => acc + Number(curr * (index + 1)),
      0
    );
    let responseTotalRatings = Object.values(ratings).reduce(
      (acc, curr) => acc + Number(curr),
      0
    );
    let value = Number((scoreTotalRatings / responseTotalRatings).toFixed(1));
    setRemainder((value * 10) % 10);
    setQuotient(Math.floor((value * 10) / 10));
  };

  useEffect(() => {
    if (isMounted.current) {
      showRatings(ratings);
    }
    return () => (isMounted.current = true);
  }, []);

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        if (
          index < quotient ||
          (index <= quotient && remainder >= 8 && remainder <= 9)
        ) {
          return (
            <MdStar key={index} className="text-[#ffa41c] text-lg star-1" />
          );
        } else if (index <= quotient && remainder >= 3 && remainder <= 7) {
          return (
            <MdStarHalf key={index} className="text-[#ffa41c] text-lg star-2" />
          );
        } else {
          return (
            <MdStarOutline
              key={index}
              className="text-[#ffa41c] text-lg star-3"
            />
          );
        }
      })}
      <span className="ml-2 text-sm tracking-wide font-normal text-[#007185] hover:text-[#c45500] cursor-pointer">
        {Object.values(ratings)
          .reduce((acc, curr) => acc + Number(curr), 0)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>
    </div>
  );
};

export default RatingStar;
