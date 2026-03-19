import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useContext, useState } from "react";
import MusicContext from "../context/MusicContext";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import SongsList from "../components/SongsList";
import SearchSection from "../components/SearchSection";

// Fix HTML entities like &quot; &amp; etc
const decodeHtml = (str) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = str ?? "";
  return txt.value;
};

const AlbumDetails = () => {
  const { setSongs } = useContext(MusicContext);
  const [album, setAlbum] = useState(null);
  const [image, setImage] = useState("");

  const { id } = useParams();

  const getAlbumDetails = async () => {
    try {
      const res = await axios.get(
        `https://jiosaavn-api-privatecvc2.vercel.app/albums?id=${id}`
      );
      const { data } = res.data;
      console.log("album image array:", data.image);
      console.log("full album data:", data);

      setAlbum(data);
      setSongs(data.songs ?? []);

      const imageUrl =
        data.image?.[2]?.link ??
        data.image?.[1]?.link ??
        data.image?.[0]?.link ??
        "";
      setImage(imageUrl);
    } catch (error) {
      console.error("Failed to fetch album details:", error.message);
    }
  };

  useEffect(() => {
    getAlbumDetails();
  }, [id]);

  if (!album) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <p className="text-gray-500 text-lg">Loading album...</p>
        </div>
        <Player />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <SearchSection />

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-24 h-screen my-48 lg:my-0 mx-2 lg:mx-auto">
        <div>
          <img
            src={image}
            alt={decodeHtml(album.name)}
            width={250}
            className="mx-auto mb-4 rounded-lg"
          />
          <div className="w-[250px] text-gray-600">
            {/*  decode HTML entities in name and artists */}
            <h1>{decodeHtml(album.name)}</h1>
            <p>
              by {decodeHtml(album.primaryArtists)} · {album.songCount} songs
            </p>
          </div>
        </div>

        <div>
          {album.songs?.map((song) => (
            <SongsList key={song.id} {...song} />
          ))}
        </div>
      </div>

      <Player />
    </>
  );
};

export default AlbumDetails;