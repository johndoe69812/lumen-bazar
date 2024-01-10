import Container from "../container";

const Header = () => {
  return (
    <header className="w-full h-24 shadow-md flex items-center sticky top-0 bg-white justify-items-stretch z-10">
      <Container className="flex gap-4 justify-around">
        <div className="text-2xl heading-8 font-bold flex items-center">
          Lumen Bazar
        </div>
        <div className="flex grow gap-2">
          <button className="flex items-center gap-1 bg-blue-400 text-white px-3 leading-8 rounded-lg hover:bg-blue-500 focus-visible:ring-2">
            All categories
          </button>
          <div className="leading-8 rounded overflow-hidden bg-blue-400 p-0.5 flex grow">
            <input
              className="border rounded pl-2 w-full"
              placeholder="Search ads"
            />
            <button className="px-5 text-white hover:bg-blue-500 focus-visible:ring-2">
              Find
            </button>
          </div>
        </div>
        <button className="mr-10">All locations</button>
      </Container>
    </header>
  );
};

export default Header;
