import { MdStarHalf, MdStarOutline, MdStar } from "react-icons/md";

const FilterSidebar = () => {
  return (
    <div className="flex flex-col item-start w-72 p-4">
      <div className="flex flex-col item-start">
        <h3 className="font-semibold text-sm tracking-wide mb-1">
          Delivery Day
        </h3>
        <div className="flex items-center">
          <input type="checkbox" name="deliveryToday" id="deliveryToday" />
          <label
            htmlFor="deliveryToday"
            className="ml-2 font-normal text-sm tracking-wide hover:text-[#e47911] cursor-pointer"
          >
            Get It Today
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="deliveryTomorrow"
            id="deliveryTomorrow"
          />
          <label
            htmlFor="deliveryTomorrow"
            className="ml-2 font-normal text-sm tracking-wide hover:text-[#e47911] cursor-pointer"
          >
            Get It Tomorrow
          </label>
        </div>
      </div>
      <div className="flex flex-col item-start mt-4">
        <h3 className="font-semibold text-sm tracking-wide mb-1">Department</h3>
        <ul className="flex flex-col items-start">
          <li className="font-normal text-sm tracking-wide hover:text-[#e47911] cursor-pointer">
            Laptops
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start mt-4">
        <h3 className="font-semibold text-sm tracking-wide mb-1">Brand</h3>
        <ul className="flex flex-col cursor-pointer">
          <li className="flex items-center">
            <input type="checkbox" name="lenovo" id="lenovo" />
            <label htmlFor="lenovo" className="hover:text-[#e47911] ml-1">
              Lenovo
            </label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start mt-4">
        <h3 className="font-semibold text-sm tracking-wide mb-1">
          Price Desktops
        </h3>
        <ul className="flex flex-col items-start">
          {[...Array(5)].map((_, index) => {
            if (index + 1 < 2) {
              return (
                <li
                  key={index + 1}
                  className="font-normal text-sm tracking-wider hover:text-[#e47911] cursor-pointer"
                >
                  Under &#8377;
                  {((index + 1) * 10000)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </li>
              );
            } else if (index + 1 < 5) {
              return (
                <li
                  key={index + 1}
                  className="font-normal text-sm tracking-wider hover:text-[#e47911] cursor-pointer"
                >
                  &#8377;
                  {((index + 1) * 10000)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  - &#8377;
                  {((index + 2) * 10000)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </li>
              );
            } else {
              return (
                <li
                  key={index + 1}
                  className="font-normal text-sm tracking-wider hover:text-[#e47911] cursor-pointer"
                >
                  Over &#8377;
                  {((index + 1) * 10000)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </li>
              );
            }
          })}
          <div className="flex items-center gap-1 mt-2">
            <input
              type="number"
              placeholder="₹Min"
              className="appearance-none px-2 py-1 font-normal text-sm w-16 rounded-md border border-solid border-gray-500 outline-none"
              min={0}
              max={100000}
            />
            <input
              type="number"
              placeholder="₹Max"
              className="appearance-none px-2 py-1 font-normal text-sm w-16 rounded-md border border-solid border-gray-500 outline-none"
              min={0}
              max={100000}
            />
            <button className="py-1 px-2 font-normal text-sm tracking-wider border border-solid border-gray-400 rounded-md">
              Go
            </button>
          </div>
        </ul>
      </div>
      <div className="flex flex-col items-start mt-4">
        <h3 className="font-semibold text-sm tracking-wide mb-1">
          Availability
        </h3>
        <div className="flex items-center">
          <input type="checkbox" name="lenovo" id="outOfStock" />
          <label
            htmlFor="outOfStock"
            className="text-sm hover:text-[#e47911] ml-1 cursor-pointer"
          >
            Include Out of Stock
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
