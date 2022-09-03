import { useEffect, useRef, useState } from "react";

const MAX_VALUE = 25;
const MIN_VALUE = 5;

const ProductPrice = ({ price }) => {
  const [discount, setDiscount] = useState(0);
  const priceRef = useRef(true);

  useEffect(() => {
    if (priceRef.current) {
      let value = Math.floor(
        Math.random() * (MAX_VALUE - MIN_VALUE) + MIN_VALUE
      );
      setDiscount((prev) => prev + value);
    }
    return () => (priceRef.current = false);
  }, []);

  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center">
        <span className="w-20 text-right text-sm text-[#565959] font-normal tracking-wider">
          M.R.P:
        </span>
        <span className="ml-1 text-sm text-[#565959] font-normal tracking-wider line-through">
          &#8377;{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00
        </span>
      </div>
      <div className="flex items-center">
        <span className="w-20 text-right text-sm text-[#565959] font-normal tracking-wider">
          Deal Price:
        </span>
        <span className="ml-1 text-lg text-[#B12704] font-semibold tracking-wider">
          &#8377;{(price - price * (discount / 100)).toFixed(2)}
        </span>
      </div>
      <div className="flex items-center">
        <span className="w-20 text-right text-sm text-[#565959] font-normal tracking-wider">
          You Save:
        </span>
        <span className="ml-1 text-sm text-[#B12704] font-semibold tracking-wider">
          &#8377;{`${(price * (discount / 100)).toFixed(2)} (${discount}%)`}
        </span>
      </div>
    </div>
  );
};

export default ProductPrice;
