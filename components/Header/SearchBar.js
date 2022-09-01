import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import MenuItemList from "./MenuList";

const SearchBar = () => {
  const [category, setCategory] = useState("All");
  const [searchBarFocus, setSearchBarFocus] = useState(false);
  const [item, setItem] = useState("");
  const router = useRouter();
  const searchBarRender = useRef(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (item === "" || item.trim().length === 0) {
      return;
    }
    router.push(
      `/search?category=${category.toLowerCase()}&item=${item
        .trim()
        .toLowerCase()}`
    );
  };

  useEffect(() => {
    if (searchBarRender.current) {
      let value = router.query.item;
      if (value) {
        setItem(value);
      }
    }
    return () => (searchBarRender.current = false);
  });

  return (
    <form
      className={`relative mx-4 grid grid-cols-[minmax(20px,auto)_1fr_48px] max-w-[700px] w-full rounded-md ${
        searchBarFocus ? "shadow-amazon-box-shadow" : ""
      }`}
      onSubmit={handleFormSubmit}
    >
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
            {MenuItemList.map((menuItem) => (
              <option key={menuItem} value={menuItem}>
                {menuItem}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="h-10">
        <input
          type="text"
          name="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Type 'Samsung galaxy m53'"
          className="outline-none px-4 py-2 font-normal text-sm text-black tracking-wider w-full h-full bg-white"
          onFocus={() => setSearchBarFocus((searchBarFocus) => !searchBarFocus)}
          onBlur={() => setSearchBarFocus((searchBarFocus) => !searchBarFocus)}
        />
      </div>
      <div className="ml-auto rounded-tr-md rounded-br-md relative w-12 h-10 flex items-center justify-center cursor-pointer bg-[#febd69] hover:bg-[#f3a847] focus-within:shadow-amazon-box-shadow">
        <button type="submit" className="w-full h-full">
          <BsSearch className="text-black  w-full h-full p-3" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
