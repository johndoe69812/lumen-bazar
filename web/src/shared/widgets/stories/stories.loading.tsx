const StoriesLoading = () => {
  return (
    <div className="w-full mt-12 flex flex-nowrap gap-4 overflow-hidden">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div key={index}>
            <div className="w-24 h-24 shrink-0 rounded-full bg-gray-200" />
            <div className="h-3 w-full mt-2 rounded bg-gray-200" />
            <div className="h-3 w-[70%] mt-1 rounded bg-gray-200" />
          </div>
        ))}
    </div>
  );
};

export default StoriesLoading;
