import Link from "next/link";

const FooterMenu = () => {
  const footerMenu = [
    {
      id: 1,
      title: "About the project",
      list: [
        {
          item_name: "Contribute",
          item_src: "https://github.com/JunDevHarsh/amazon-clone",
        },
        {
          item_name: "Issues",
          item_src: "https://github.com/JunDevHarsh/amazon-clone/issues",
        },
        {
          item_name: "PR's",
          item_src: "https://github.com/JunDevHarsh/amazon-clone/pulls",
        },
      ],
    },
    {
      id: 2,
      title: "Let Us Help You",
      list: [
        {
          item_name: "Your Account",
          item_src: "/account",
        },
        {
          item_name: "Amazon-Clone Offers",
          item_src: "/offers",
        },
        {
          item_name: "Help",
          item_src: "/help",
        },
      ],
    },
  ];

  return (
    <div className="max-w-3xl w-full mx-auto py-4">
      <div className="w-full flex items-start justify-center">
        {footerMenu.map((menu) => (
          <div className="w-1/2" key={menu.id}>
            <div className="w-full flex flex-col items-center">
              <ul className="flex flex-col items-start">
                <h3 className="my-1 text-white text-base font-semibold tracking-wider">
                  {menu.title}
                </h3>
                {menu.list.map((listItem, index) => (
                  <li
                    key={`${listItem}-${index}`}
                    className="my-1 text-white text-sm font-normal tracking-wider hover:underline cursor-pointer"
                  >
                    <Link href={listItem.item_src}>
                      <a>{listItem.item_name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterMenu;
