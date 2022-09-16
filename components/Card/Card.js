import { useRef } from "react";
import { GrClose } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";

const Card = ({
  cardRef,
  cardNumberRef,
  cardNameRef,
  cardMonthRef,
  cardYearRef,
  handleCardVisibility,
  setCards,
}) => {
  const CURRENT_YEAR = new Date().getFullYear();
  const CURRENT_MONTH = new Date().getMonth();

  const handleAddNewCard = () => {
    let { value: cardNumber } = cardNumberRef.current;
    let { value: cardName } = cardNameRef.current;
    let { value: cardMonth } = cardMonthRef.current;
    let { value: cardYear } = cardYearRef.current;
    if (cardNumber === "" || cardName === "") return;
    if (cardNumber.length < 19) return;
    setCards((prev) => [
      ...prev,
      {
        card_number: cardNumber,
        user_name: cardName,
        expiry_month: cardMonth,
        expiry_year: cardYear,
      },
    ]);
    handleCardVisibility();
  };

  const handleCardNumber = (event) => {
    let { value } = event.target;
    value = value.replace(/\W/g, "");
    if (value.length === 0) {
      return (cardNumberRef.current.value = "");
    }
    if (value.length >= 16) {
      value = value.split("").slice(0, 16).join("");
      return (cardNumberRef.current.value = value);
    }
    return (cardNumberRef.current.value = value);
  };

  const validateCardNumber = (value) => {
    // replace all spaces from the value
    let enteredVal = value
      .replace(/\W/g, "")
      .replace(/(.{4})/g, "$1 ")
      .replace(/[^\d ]/g, "")
      .trim();
    // checks if user is trying to
    // enter space for invalidation
    if (enteredVal.length === 0) {
      return (cardNumberRef.current.value = "");
    }
    if (enteredVal.length > 20) return;
    return (cardNumberRef.current.value = enteredVal);
  };

  const validateCardName = (event) => {
    let { value } = event.target;
    let enteredName = value.replace(/\s+/g, " ").trim();
    if (enteredName.length === 0) {
      return (cardNameRef.current.value = "");
    }
    return (cardNameRef.current.value = enteredName);
  };

  return (
    <div
      ref={cardRef}
      className="w-full my-4 bg-white border border-[#d5d9d9] border-solid rounded-md overflow-hidden shadow-[0_0_14px_0_#0f111180]"
    >
      {/* Header */}
      <div className="bg-[#F0F2F2] border-b border-solid border-[#d5d9d9] p-4 flex items-center justify-between">
        <h3 className="text-black text-sm font-medium tracking-wider">
          Add a card
        </h3>
        <GrClose onClick={handleCardVisibility} className="cursor-pointer" />
      </div>
      {/* Main Content */}
      <div className="bg-white p-4 flex flex-col items-start gap-4">
        {/* Card Number Row */}
        <div className="flex items-center gap-4">
          <span className="w-28 text-right text-black text-sm font-medium tracking-wider">
            Card Number
          </span>
          <input
            type="text"
            ref={cardNumberRef}
            onChange={(e) => handleCardNumber(e)}
            onBlur={(e) => validateCardNumber(e.target.value)}
            className="px-2 py-0.5 text-black text-sm font-normal tracking-wider border border-solid border-[#888c8c] outline-none rounded-md"
            placeholder="1234-5678-9012-3456"
          />
        </div>
        {/* Name Row */}
        <div className="flex items-center gap-4">
          <span className="w-28 text-right text-black text-sm font-medium tracking-wider">
            Name on card
          </span>
          <input
            type="text"
            ref={cardNameRef}
            maxLength={20}
            onBlur={(e) => validateCardName(e)}
            className="px-2 py-0.5 text-black text-sm font-normal tracking-wider border border-solid border-[#888c8c] outline-none rounded-md"
            placeholder="Username"
          />
        </div>
        {/* Expiry Row */}
        <div className="flex items-center gap-4">
          <span className="w-28 text-right text-black text-sm font-medium tracking-wider">
            Expiry date
          </span>
          {/* Expiry Month */}
          <div className="relative">
            <select
              ref={cardMonthRef}
              className="text-black text-sm font-normal tracking-wider pl-3 pr-4 py-1 border border-[#adb1b8] hover:border-[#a2a6ac] border-solid rounded-md bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] hover:from-[#e7eaf0] hover:to-[#d9dce1] cursor-pointer outline-none"
            >
              {[...Array(12 - CURRENT_MONTH)].map((_, idx) => (
                <option key={idx + 1} value={CURRENT_MONTH + idx + 1}>
                  {CURRENT_MONTH + idx + 1}
                </option>
              ))}
            </select>
            <IoMdArrowDropdown className="absolute right-0.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          {/* Expiry Year */}
          <div className="relative">
            <select
              ref={cardYearRef}
              className="text-black text-sm font-normal tracking-wider pl-3 pr-4 py-1 border border-[#adb1b8] hover:border-[#a2a6ac] border-solid rounded-md bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] hover:from-[#e7eaf0] hover:to-[#d9dce1] cursor-pointer outline-none"
            >
              {[...Array(20)].map((_, idx) => (
                <option key={CURRENT_YEAR + idx} value={CURRENT_YEAR + idx}>
                  {CURRENT_YEAR + idx}
                </option>
              ))}
            </select>
            <IoMdArrowDropdown className="absolute right-0.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-[#f0f2f2] p-4 flex items-center justify-end gap-2 border-t border-solid border-[#d5d9d9]">
        <p
          onClick={handleCardVisibility}
          className="text-black text-sm font-normal tracking-wider px-3 py-1 border border-[#adb1b8] hover:border-[#a2a6ac] border-solid rounded-md bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] hover:from-[#e7eaf0] hover:to-[#d9dce1] cursor-pointer"
        >
          Cancel
        </p>
        <p
          onClick={handleAddNewCard}
          className="text-black text-sm font-normal tracking-wider px-3 py-1 bg-[#FFD814] hover:bg-[#F7CA00] border border-solid border-[#FCD200] hover:border-[#F2C200] hover:shadow-[0_2px_5px_0_#d5d9d980] cursor-pointer rounded-md"
        >
          Add to Cart
        </p>
      </div>
    </div>
  );
};

export default Card;
