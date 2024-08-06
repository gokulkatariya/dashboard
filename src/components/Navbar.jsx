function Navbar() {
  return (
    <nav className="bg-gray-800 md:p-5 flex justify-between  items-center">
      <div className="flex items-center md:gap-12">
        <div>
          <img
            width="32"
            className="invert cursor-pointer md:"
            src="/src/assets/grid.png"
            alt=""
          />
        </div>
        <div className="relative">
          <img
            width="20"
            className="invert  absolute md:top-3 md:left-3 cursor-pointer"
            src="/src/assets/search-svgrepo-com.svg"
            alt=""
          />
          <input
            className="bg-gray-600 md:p-2 md:pl-10 rounded-md text-white"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <ul className="flex items-center md:gap-7">
        <li>
          <img
            width="36"
            className="invert cursor-pointer bg-gray-400 rounded-full md:p-2"
            src="/src/assets/message-svgrepo-com.svg"
            alt=""
          />
        </li>
        <li>
          <img
            width="36"
            className="invert cursor-pointer bg-gray-400 rounded-full p-2"
            src="/src/assets/settings-svgrepo-com.svg"
            alt=""
          />
        </li>
        <li>
          <img
            width="40"
            className="invert cursor-pointer bg-gray-400 p-2 rounded-full"
            src="/src/assets/notification-13-svgrepo-com.svg"
            alt=""
          />
        </li>
        <li>
          <img
            className="rounded-full cursor-pointer"
            width="40"
            src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-34284,resizemode-75,msid-101480759/magazines/panache/srk-meets-with-accident-during-shoot-in-los-angeles-undergoes-surgery.jpg"
            alt=""
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
