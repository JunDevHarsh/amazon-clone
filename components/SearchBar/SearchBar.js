import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import CategorySelection from "./CategorySelection";
import InputSearchBar from "./InputSearchBar";

const SearchBar = () => {
  const [category, setCategory] = useState("All");
  const searchItemRef = useRef("");
  const router = useRouter();

  const handleFormSubmit = (e) => {
    // prevent the page from reloading
    e.preventDefault();
    // initialize variable with typed search value
    let checkValue = searchItemRef.current;
    // check if user hasn't entered any value in input field
    // if not then just don't do anything
    if (!checkValue.length) return;
    // if entered then do proper validation
    // to avoid extra space due to some unexpected results
    checkValue = checkValue.replace(/^\s+|\s+$/g, "").toLowerCase();
    // again checking if entered value don't consist only spaces
    if (checkValue.length === 0) return;
    // if not then render to the seach page
    router.push(
      `/search?category=${category.toLowerCase()}&item=${checkValue}`
    );
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="relative max-w-[700px] w-full mx-4"
    >
      <div className="relative grid grid-cols-[minmax(20px,auto)_1fr_48px] w-full rounded-md">
        <CategorySelection category={category} setCategory={setCategory} />
        <InputSearchBar searchItemRef={searchItemRef} category={category} />
        <div className="ml-auto rounded-tr-md rounded-br-md relative w-12 h-10 flex items-center justify-center cursor-pointer bg-[#febd69] hover:bg-[#f3a847] focus-within:shadow-amazon-box-shadow">
          <button type="submit" className="w-full h-full">
            <BsSearch className="text-black  w-full h-full p-3" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
