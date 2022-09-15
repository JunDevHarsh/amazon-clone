import Image from "next/image";
import Link from "next/link";
import CartIcon from "../../public/icons/cart-icon.svg";

const Cart = () => {
  return (
    <div className="border border-transparent hover:border-white rounded-[0.25rem] cursor-pointer">
      <Link href="/cart">
        <div className="relative flex items-end w-[4.75rem] h-11 py-[9px] px-[5px]">
          <Image
            src={CartIcon}
            width={37}
            height={24}
            alt="cart-icon"
            className="h-full"
          />
          <span className="absolute top-0 left-[28%] -translate-x-[28%] font-semibold text-[#e47911]">
            0
          </span>
          <span className="font-medium text-white relative top-1 tracking-wider">
            Cart
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
