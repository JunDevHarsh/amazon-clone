import Image from "next/image";

const SavedCard = ({ cards }) => {
  return (
    <div className="w-full my-2">
      <div className="grid grid-cols-[1.5fr_1fr_120px] items-center gap-4">
        <h3 className="text-center text-black text-xl font-medium tracking-wider">
          Your saved cards
        </h3>
        <h3 className="text-black text-base font-medium tracking-wider">
          Name
        </h3>
        <h3 className="text-black text-base font-medium tracking-wider">
          Expires
        </h3>
      </div>
      <div className="w-full flex flex-col my-4 gap-2">
        {cards.length === 0 ? (
          <div className="w-full text-center">
            <p className="text-black text-sm font-medium tracking-wider">
              Not added yet
            </p>
          </div>
        ) : (
          cards.map((card, index) => (
            <div
              key={card.card_number + "-" + index}
              className="w-full px-4 py-2 grid grid-cols-[24px_1fr_1fr_100px] items-center gap-4 bg-[#f3f3f3] border border-solid border-[#ddd] rounded-md cursor-pointer"
            >
              <Image
                src={"/icons/credit-card-sm.png"}
                width={24}
                height={24}
                alt="credit-card-img"
              />
              <p className="text-black text-sm font-normal tracking-wider">
                {`Card ending with ${card.card_number.split(" ")[3]}`}
              </p>
              <p className="text-black text-sm font-normal tracking-wider">
                {card.user_name}
              </p>
              <p className="text-black text-sm font-normal tracking-wider">
                {card.expiry_month < 10
                  ? `0${card.expiry_month}`
                  : card.expiry_month}
                /{card.expiry_year}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SavedCard;
