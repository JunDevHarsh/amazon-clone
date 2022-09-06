import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";

const CartProducts = ({ product, quantity, setQuantity }) => {
  return (
    <div className="bg-white p-4 w-9/12">
      <div className="flex items-end justify-between">
        <h1 className="text-black text-3xl font-normal tracking-wider">
          Shopping Cart
        </h1>
        <span className="text-[#565959] text-sm font-normal tracking-wide">
          Price
        </span>
      </div>
      {/* Horizontal line */}
      <div className="w-full border-t my-4 border-solid border-t-[#e7e7e7]" />
      <div className="flex items-start w-full">
        <div className="w-1/6">
          <Link href={`/product?id=${product.id}&item=${product.title}`}>
            <a>
              <Image
                src={`/mobile/${product.images[0]}.jpg`}
                width={160}
                height={180}
                alt={`${product.images[0]}-image`}
              />
            </a>
          </Link>
        </div>
        <div className="w-4/6 flex flex-col items-start gap-1">
          <Link href={`/product?id=${product.id}&item=${product.title}`}>
            <a>
              <h2 className="text-black text-base font-semibold tracking-wider">
                {product.title}
              </h2>
            </a>
          </Link>
          <p
            className={`text-xs font-medium tracking-wider ${
              product.out_of_stock ? "text-[#c40000]" : "text-[#007600]"
            }`}
          >
            {product.out_of_stock ? "Out of Stock" : "In Stock"}
          </p>
          <p className="text-black text-sm tracking-wider">
            <span className="font-semibold">Size name:</span>
            <span className="font-normal ml-1">
              {product.ram}GB + {product.rom}GB
            </span>
          </p>
          <p className="text-black text-sm tracking-wider">
            <span className="font-semibold">Model name:</span>
            <span className="font-normal ml-1">{product.model_number}</span>
          </p>
          <div className="flex items-center gap-4">
            <div className="relative flex items-center">
              <label
                htmlFor="quantity"
                className="text-base text-black font-medium"
              >
                Quantity:
              </label>
              <select
                className="ml-1 px-3 py-1 w-12 border border-solid border-[#ddd] rounded outline-none cursor-pointer"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {[...Array(15)].map((_, qtyIdx) => (
                  <option key={qtyIdx} value={qtyIdx + 1}>
                    {qtyIdx + 1}
                  </option>
                ))}
              </select>
              <IoMdArrowDropdown className="absolute top-1/2 right-1 -translate-y-1/2 pointer-events-none" />
            </div>
            <div className="w-0.5 h-5 border-r border-solid border-r-[#ddd]" />
            <p className="text-sm text-[#007185] cursor-pointer hover:underline font-normal tracking-wider">
              Delete
            </p>
          </div>
        </div>
        <div className="w-1/6">
          <p className="text-black text-lg text-right font-semibold tracking-wider">
            &#8377;
            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
