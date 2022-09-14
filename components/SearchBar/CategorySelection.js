import { memo } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const CategorySelection = ({ category, setCategory }) => {
  const categoryList = ["All Categories", "Electronics"];

  return (
    <div className="rounded-tl-md rounded-bl-md focus-within:shadow-amazon-box-shadow mr-[2px] shadow-[2px_0_0_0_#cdcdcd]">
      <div className="relative rounded-tl-md rounded-bl-md overflow-hidden w-auto">
        <p className="flex items-center bg-[#f3f3f3] text-black py-3">
          <span className="ml-2 text-xs font-normal tracking-wider">
            {category}
          </span>
          <IoMdArrowDropdown className="ml-2" />
        </p>
        <select
          id="select-menu"
          name="category"
          className="absolute top-0 left-0 w-auto opacity-0 py-2 cursor-pointer"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categoryList.map((categoryItem, index) => (
            <option key={`${categoryItem}-${index}-item`} value={categoryItem}>
              {categoryItem}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default memo(CategorySelection);
