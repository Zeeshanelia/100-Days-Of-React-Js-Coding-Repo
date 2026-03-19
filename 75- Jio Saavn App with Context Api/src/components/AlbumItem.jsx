import { Link } from "react-router-dom";

const AlbumItem = ({ name, artists, id, image, title }) => {
  const imageUrl =
    image?.[2]?.link ?? image?.[1]?.link ?? image?.[0]?.link ?? "";

  const artistNames = artists?.map((artist) => artist.name).join(", ") ?? "";
  const trimmedArtists =
    artistNames.length > 24 ? artistNames.slice(0, 24) + "..." : artistNames;

  return (
    <Link
      to={`/albums/${id}`}
      className="w-[160px] max-h-[220px] overflow-y-clip flex flex-col justify-center items-center gap-3 rounded-lg"
    >
      <img src={imageUrl} alt={name ?? title ?? ""} className="rounded-lg" />
      <div className="text-[13px] w-full flex flex-col justify-center items-center">
        <span className="text-gray-600 font-semibold overflow-x-clip">
          {name}
        </span>
        <p className="text-gray-500 font-thin">{trimmedArtists}</p>
      </div>
    </Link>
  );
};

export default AlbumItem;