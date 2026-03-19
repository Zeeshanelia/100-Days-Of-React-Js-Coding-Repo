import { useContext } from "react";
import MusicContext from "../context/MusicContext";
import SongItem from "./SongItem";

const SearchSection = () => {
  const { searchedSongs, setSearchedSongs } = useContext(MusicContext);

  return (
    <div
      className={`fixed inset-0 z-10 bg-white bg-opacity-90 backdrop-blur-lg overflow-y-auto pt-20 pb-32 px-6
        ${searchedSongs.length === 0 ? "-translate-y-full" : "translate-y-0"}
        transition-transform duration-500 ease-in-out`}
    >
      {/*  close button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Search Results</h2>
        <button
          onClick={() => setSearchedSongs([])}
          className="text-gray-500 hover:text-gray-800 text-sm font-medium"
        >
          ✕ Close
        </button>
      </div>

      {/*  full screen grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {searchedSongs?.map((song) => (
          <SongItem key={song.id} {...song} />
        ))}
      </div>
    </div>
  );
};

export default SearchSection;