import Link from "next/link";

const LocationModal = ({ showModal, closeModal }) => {
  const handlePinCodeValue = (e) => {
    e.preventDefault();
    // code here
    alert("WIP: Will be updated soon.");
  };

  const focusOut = () => {
    closeModal((showModal) => !showModal);
  };

  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full z-[99]">
          <div
            className="fixed top-0 left-0 w-full h-full bg-[#000000cc] z-[100]"
            onClick={focusOut}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-xs w-full h-auto bg-white rounded-md overflow-hidden z-[110]">
            <div className="bg-[#f0f0f0] w-full px-6 py-2">
              <h2 className="text-base font-semibold tracking-wider text-black">
                Choose your location
              </h2>
            </div>
            <div className="px-6 py-2">
              <p className="my-2 text-xs tracking-wider font-normal text-gray-500">
                Select a delivery location to see product availability and
                delivery options
              </p>
              <Link href="/auth/sign-in">
                <a className="py-1 block text-sm font-normal text-black text-center tracking-wide bg-[#FFD814] hover:bg-[#F7CA00] border-[#FCD200] hover:border-[#F2C200] border-[1px] border-solid rounded-md">
                  Sign in to see your addresses
                </a>
              </Link>
              <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center my-2 w-full">
                <div className="w-full border-t border-t-solid border-t-[#ebecef]"></div>
                <p className="text-xs tracking-wider text-gray-500">
                  or enter an Indian pincode
                </p>
                <div className="w-full border-t border-t-solid border-t-[#ebecef]"></div>
              </div>
              <form
                className="flex items-center justify-between w-full my-2"
                onSubmit={handlePinCodeValue}
              >
                <input
                  type="number"
                  className="px-2 py-1 font-normal text-sm text-black border-[1px] border-solid border-[#888C8C] rounded-md bg-white outline-none focus:border-[#007185]"
                  name="pinCode"
                  id="pinCode"
                  min="0"
                />
                <input
                  type="submit"
                  className="text-sm text-black font-light tracking-wider rounded-md py-1 px-4 cursor-pointer border-[1px] border-[#d5d9d9] border-solid"
                  value="Apply"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LocationModal;
