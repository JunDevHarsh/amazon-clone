import { useRouter } from "next/router";
import { memo, useState } from "react";
import SearchResults from "../../pages/api/search-products.json";

const InputSearchBar = ({ category, searchItemRef }) => {
  const router = useRouter();
  const [searchList, setSearchList] = useState([]);
  const MAX_SEARCH_LENGTH = 5;

  const handleSearchOnChange = (value) => {
    // update value so that user can continue to enter more values to search
    searchItemRef.current = value;
    // initaialize variable with entered value with proper validation using Reg-Ex
    let enteredValue = value.replace(/^\s+|\s+$/g, "").toLowerCase();
    // check if entered value is null or not valid then return
    if (enteredValue.length === 0) return;
    // filtering list to get required results
    const filteredList = SearchResults.filter((result) =>
      result.title.toLowerCase().startsWith(enteredValue)
    ).slice(0, MAX_SEARCH_LENGTH);
    // if get any results by filtering the list
    // then update the result state
    if (filteredList.length > 0) {
      return setSearchList(() => [...filteredList]);
    } else if (filteredList.length === 0 && enteredValue.length > 0) {
      return setSearchList(() => []);
    }
  };

  const handleOnSearchList = (item) => {
    router.push(`/search?category=${category}&item=${item}`);
  };

  return (
    <div className="h-10 relative">
      <input
        type="text"
        name="item"
        ref={searchItemRef}
        onChange={(e) => handleSearchOnChange(e.target.value)}
        placeholder="Type 'Samsung galaxy m53'"
        className="searchbar outline-none px-4 py-2 font-medium text-sm text-black tracking-wider w-full h-full bg-white"
      />
      <div
        className={`searchbar-result ${
          searchList.length === 0 ? "hidden" : "block"
        } w-full absolute top-full left-0 bg-white border border-solid border-[#ddd] shadow-[0px_2px_4px_0px_#00000021]`}
      >
        {searchList.length > 0 &&
          searchList.map((listItem, index) => (
            <p
              className="w-full px-4 py-1 text-black text-base font-medium tracking-wider hover:bg-[#eee] cursor-pointer"
              key={index}
              onClick={(e) => handleOnSearchList(e.target.innerText)}
            >
              {listItem.title}
            </p>
          ))}
        <ul></ul>
      </div>
    </div>
  );
};

export default memo(InputSearchBar);
