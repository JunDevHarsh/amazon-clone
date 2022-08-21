import Image from "next/image";
import Link from "next/link";

const PreviewShoppingItem = () => {
  const previewItemsList = [
    {
      id: 1,
      title: "iqoo9t",
      text: "iQOO 9T 5G (Legend, 8GB RAM, 128GB Storage) | Snapdragon® 8+ Gen 1 | 120W FlashCharge | 120Hz E5 AMOLED Display",
    },
    {
      id: 2,
      title: "iphone-13-pro",
      text: "Apple iPhone 13 Pro (128 GB) - Alpine Green",
    },
    {
      id: 3,
      title: "iphone-13-pro-max",
      text: "Apple iPhone 13 Pro Max (256GB) - Sierra Blue",
    },
    {
      id: 4,
      title: "iphone-13",
      text: "Apple iPhone 13 (128GB) - Blue",
    },
  ];
  return (
    <div className="p-4 bg-white w-80 h-auto">
      <h3 className="text-[#0f1111] text-lg font-bold tracking-wider">
        Keep shopping for
      </h3>
      <div className="flex items-center justify-around flex-wrap gap-2">
        {previewItemsList.map((previewItem) => (
          <div
            key={previewItem.id}
            className="relative flex flex-col items-center mt-1"
          >
            <Link href={`/${previewItem.title}`}>
              <a>
                <div className="relative w-[8.3rem] h-[9.56rem]">
                  <Image
                    src={`/preview/${previewItem.title}.jpg`}
                    layout="fill"
                    objectFit="contain"
                    alt={`${previewItem.title}-img`}
                  />
                </div>
                <p className="text-sm text-[#0f1111] font-medium tracking-wider">
                  {`${previewItem.text.slice(0, 15)}...`}
                </p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewShoppingItem;
