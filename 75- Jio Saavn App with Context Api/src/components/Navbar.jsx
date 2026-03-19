import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import axios from "axios";
import { useContext } from "react";
import MusicContext from "../context/MusicContext";

const Navbar = () => {
  const { setSearchedSongs } = useContext(MusicContext);

  const searchSongs = async (e) => {
    const query = e.target.value;

    if (!query || query.trim().length === 0) {
      setSearchedSongs([]);
      return;
    }

    try {
      //  updated dead API URL
      const res = await axios.get(
        `https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=${query}&page=1&limit=12`
      );
      //  res.data is not a Promise, no await needed
      const { data } = res.data;

      if (!data?.results || data.results.length === 0) {
        setSearchedSongs([]);
      } else {
        setSearchedSongs(data.results);
      }
    } catch (error) {
      console.error("Search failed:", error.message);
      setSearchedSongs([]);
    }
  };

  return (
    <nav className="flex justify-between items-center py-3 border-none lg:border px-2 fixed top-0 left-0 right-0 bg-[#f5f5f5ff] z-20">
      {/* 1st div */}
      <div className="flex flex-col lg:flex-row justify-between items-center mx-auto lg:mx-0">
        <div className="flex justify-between items-center gap-2 mr-4">
          <img src="/savan-logo.png" alt="logo" width={37} />
          <Link to="/" className="font-extrabold text-lg">
            JioSaavn
          </Link>
        </div>
        <div className="flex text-[24px] lg:text-[15px] gap-5 text-gray-600 font-semibold h-full">
          <li className="list-none">Music</li>
          <li className="list-none">Podcasts</li>
          <li className="list-none">Go Pro</li>
        </div>
      </div>

      {/* 2nd div */}
      <div className="hidden lg:block">
        <input
          type="text"
          name="search"
          id="search"
          className="py-2 rounded-full w-[40vw] outline-none text-center border text-black"
          placeholder="Search for songs"
          autoComplete="off"
          autoCorrect="off"
          onChange={searchSongs}
        />
      </div>

      {/* 3rd div */}
      <div className="hidden lg:flex justify-between items-center gap-4">
        <div className="flex justify-center gap-2">
          <div className="flex flex-col text-sm">
            <span className="text-[14px] text-gray-600 font-semibold">
              Music Languages
            </span>
            <span className="text-[12px] text-gray-500">Hindi</span>
          </div>
          <MdKeyboardArrowDown className="text-xl text-gray-500 mt-2" />
        </div>
        <div className="flex text-[15px] gap-5 text-gray-600 font-semibold">
          <li className="list-none">Log In</li>
          <li className="list-none">Sign Up</li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;