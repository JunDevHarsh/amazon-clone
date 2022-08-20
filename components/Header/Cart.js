import Image from "next/image";
import CartIcon from "../../public/icons/cart-icon.svg";

const Cart = () => {
  return (
    <div className="relative flex items-end w-[4.75rem] h-11 border-[1px] py-[9px] px-[5px] border-transparent hover:border-white rounded-[0.25rem] cursor-pointer">
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
  );
};

export default Cart;
