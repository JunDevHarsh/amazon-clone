import RatingStar from "../SearchResult/RatingStar";
import IconWidgets from "./IconWidgets";
import ProductPrice from "./ProductPrice";

const ProductDetails = ({ details }) => {
  const { title, ratings, model_number, price, brand_name, description } =
    details;

  return (
    <div className="w-5/12 flex flex-col items-start gap-2 px-4">
      {/* Product title */}
      <h2 className="text-2xl text-black font-semibold tracking-wider">
        {title}
      </h2>
      <RatingStar ratings={ratings} />
      {/* Horizontal line */}
      <div className="w-full border-t border-solid border-t-[#e7e7e7]" />
      {/* Product price */}
      <ProductPrice price={price} />
      {/* Horizontal line */}
      <div className="w-full border-t border-solid border-t-[#e7e7e7]" />
      {/* Icon List */}
      <IconWidgets />
      {/* Horizontal line */}
      <div className="w-full border-t border-solid border-t-[#e7e7e7]" />
      {/* Product short info */}
      <div className="flex flex-col items-start gap-2 my-4">
        <div className="flex items-center">
          <span className="w-40 text-sm text-[#0F1111] font-semibold tracking-wider">
            Brand
          </span>
          <span className="text-sm text-[#5e5f5f] font-normal tracking-wider">
            {brand_name}
          </span>
        </div>
        <div className="flex items-center">
          <span className="w-40 text-sm text-[#0F1111] font-semibold tracking-wider">
            Model Number
          </span>
          <span className="text-sm text-[#5e5f5f] font-normal tracking-wider">
            {model_number}
          </span>
        </div>
      </div>
      {/* Horizontal line */}
      <div className="w-full border-t border-solid border-t-[#e7e7e7]" />
      {/* Product description */}
      <h4 className="font-semibold text-base text-black tracking-wide">
        About this item
      </h4>
      <ul className="flex flex-col items-start list-disc ml-5">
        {description.map((desc) => (
          <li
            key={desc}
            className="text-sm text-black font-normal tracking-wider"
          >
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;
