import { Circle, Square } from "@/shared/components/skeleton";

const CategoriesPopupLoading = () => {
  return (
    <div className="fixed z-10 inset-0 flex justify-center items-start top-[8rem]">
      <div className="absolute bg-gray-800 w-full h-full opacity-50" />
      <div className="h-[65vh] 2xl:w-[1440px] z-10 rounded-b-3xl grid grid-cols-12 py-6 pl-16 overflow-hidden bg-white">
        <div className="relative col-span-3 flex flex-col gap-2 h-full">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex gap-4 items-center">
                <Circle className="w-8 h-8" />
                <Square className="h-4 flex-grow" />
              </div>
            ))}
        </div>
        <div className="relative col-span-9 h-full">
          <div className="px-10">
            <div className="relative col-span-3 flex flex-col gap-2 h-full">
              <Square className="mb-8" />
              <div className="columns-3">
                {Array(30)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="rounded-lg h-6 w-full mb-4 bg-gray-200"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPopupLoading;
