import Link from "next/link";

const CartCheckout = ({ quantity, price }) => {
  return (
    <div className="bg-white p-4 w-3/12">
      <p className="text-black text-base font-normal tracking-wider">
        {`Subtotal (${quantity} item):`}
        <span className="font-semibold text-xl ml-2">
          &#8377;
          {`${(price * quantity)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
          .00
        </span>
      </p>
      <div className="w-full my-2 flex items-center justify-center">
        <Link href="/checkout">
          <a className="w-full py-2 px-4 text-center text-sm text-black font-medium bg-[#FFD814] hover:bg-[#F7CA00] border border-solid border-[#FCD200] hover:border-[#F2C200] hover:shadow-[0_2px_5px_0_#d5d9d980] cursor-pointer rounded-md">
            Proceed to Buy
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CartCheckout;
