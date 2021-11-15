const Header = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          <div>
            <a href="/#" className="font-sans text-xl">
              Cinema App
            </a>
          </div>

          <nav className="flex space-x-5">
            <ul className="flex space-x-5 items-center">
              <li className="text-sm tracking-wide">Now Playing</li>
              <li className="text-sm tracking-wide">Popular</li>
              <li className="text-sm tracking-wide">Top Rated</li>
              <li className="text-sm tracking-wide">New Movies</li>
            </ul>
            <input
              type="text"
              placeholder="Search for a movie"
              className="px-2 py-2 border rounded"
            />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
