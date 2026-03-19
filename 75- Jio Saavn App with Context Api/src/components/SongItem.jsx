import { useContext } from "react";
import MusicContext from "../context/MusicContext";

const SongItem = ({
  name,
  image,
  duration,
  downloadUrl,
  id,
  primaryArtists,
}) => {
  const { playMusic } = useContext(MusicContext);

  const imageUrl =
    image?.[2]?.link ?? image?.[2]?.url ??
    image?.[1]?.link ?? image?.[1]?.url ??
    image?.[0]?.link ?? image?.[0]?.url ?? "";

  return (
    <div
      className="w-[160px] flex flex-col justify-center items-center gap-3 rounded-lg cursor-pointer hover:bg-white hover:shadow-md p-2 transition-all duration-300"
      onClick={() => playMusic(downloadUrl, name, duration, image, id, primaryArtists)}
    >
      <img
        src={imageUrl}
        alt={name}
        className="rounded-lg w-full object-cover"
      />
      <div className="text-[13px] w-full flex flex-col justify-center items-center">
        <span className="font-semibold text-center line-clamp-2">{name}</span>
        <span className="text-gray-500 text-xs text-center line-clamp-1">{primaryArtists}</span>
      </div>
    </div>
  );
};

export default SongItem;