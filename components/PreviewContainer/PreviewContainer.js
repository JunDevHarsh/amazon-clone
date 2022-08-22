import PreviewCategory from "./PreviewCategory";
import PreviewClearance from "./PreviewClearance";
import PreviewShoppingItem from "./PreviewShoppingItem";
import PreviewSlideBox from "./PreviewSlideBox";

const PreviewContainer = () => {
  return (
    <div className="relative max-w-[90rem] w-full h-auto p-4 mx-auto flex items-center gap-4">
      <PreviewShoppingItem />
      <PreviewCategory />
      <PreviewSlideBox />
      <PreviewClearance />
    </div>
  );
};

export default PreviewContainer;
