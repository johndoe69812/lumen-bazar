const FavoriteCardLoading = () => {
  return (
    <div className="w-full py-2">
      <div className="relative flex gap-2">
        <div className="w-1/4 h-24 rounded bg-gray-200" />
        <div className="flex flex-col gap-1 w-full">
          <div className="w-4/5 h-4 bg-gray-200" />
          <div className="w-3/5 h-4 bg-gray-200" />
          <div className="w-1/5 h-4 mt-1 bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default FavoriteCardLoading;
