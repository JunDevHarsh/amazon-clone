import { IoMdArrowDropdown } from "react-icons/io";

const MAX_SEARCH_TEXT_LENGTH = 50;

const SearchResultHeader = ({ searchItem }) => {
  const list = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "Avg. Customer Review",
    "Newest Arrivals",
  ];

  return (
    <div className="flex items-center justify-between p-2 border-b border-solid border-[#ccc] shadow-[0_4px_4px_0_rgba(221,221,221,1)]">
      <p className="text-sm font-normal text-black tracking-wider">
        1 - 10 of 100 results for&nbsp;
        <span className="text-[#c45500] font-semibold">{`"${
          searchItem.length < MAX_SEARCH_TEXT_LENGTH
            ? searchItem
            : searchItem.slice(0, MAX_SEARCH_TEXT_LENGTH) + "..."
        }"`}</span>
      </p>
      <div
        id="sortListMenu"
        className="relative flex items-center bg-[#F0F2F2] hover:bg-[#E3E6E6] border border-solid border-[#D5D9D9] rounded-2xl px-2.5 hover:cursor-pointer"
      >
        <span className="font-light text-xs tracking-wide">Sort by:</span>
        <select
          name="sort-list-menu"
          className="font-light text-xs tracking-wide outline-none pl-1 pr-4 py-1 cursor-pointer bg-transparent"
        >
          {list.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <IoMdArrowDropdown className="absolute top-1/2 right-0 -translate-y-1/2 mr-2" />
      </div>
    </div>
  );
};

export default SearchResultHeader;
