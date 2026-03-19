import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AlbumDetails from "./pages/AlbumDetails";
import MusicContext from "./context/MusicContext";
import { useState } from "react";

export default function App() {
  const [songs, setSongs] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [searchedSongs, setSearchedSongs] = useState([]);

  const playMusic = async (
   music, name, duration, image, id, primaryArtists
  ) => {
    if (currentSong && currentSong.id === id) {
      if (isPlaying) {
        setIsPlaying(false);
        currentSong.audio.pause();
      } else {
        setIsPlaying(true);
        await currentSong.audio.play();
      }
    } else {
      if (currentSong) {
        currentSong.audio.pause();
        setIsPlaying(false);
      }

      const songUrl =
        music[4]?.link ??
        music[3]?.link ??
        music[2]?.link ??
        music[1]?.link ??
        music[0]?.link;

      if (!songUrl) {
        console.error("No playable URL found", music);
        return;
      }

      // image could be a string (from Player) or an array (from SongsList)
      const imageUrl = Array.isArray(image)
        ? image?.[2]?.link ?? image?.[1]?.link ?? image?.[0]?.link ?? ""
        : image ?? "";

      const newAudio = new Audio(songUrl);

      setCurrentSong({
        name,
        duration,
        image: imageUrl,
        id,
        audio: newAudio,
        primaryArtists,
      });

      setIsPlaying(true);

      try {
        await newAudio.play();
      } catch (err) {
        console.error("Playback failed:", err.message);
        setIsPlaying(false);
      }
    }
  };

  const nextSong = () => {
    if (currentSong) {
      const index = songs.findIndex((song) => song.id === currentSong.id);
      const nextIndex = index === songs.length - 1 ? 0 : index + 1;
      const { downloadUrl, name, duration, image, id, primaryArtists } =
        songs[nextIndex];
      playMusic(downloadUrl, name, duration, image, id, primaryArtists);
    }
  };

  const prevSong = () => {
    if (currentSong) {
      const index = songs.findIndex((song) => song.id === currentSong.id);
      const prevIndex = index === 0 ? songs.length - 1 : index - 1;
      const { downloadUrl, name, duration, image, id, primaryArtists } =
        songs[prevIndex];
      playMusic(downloadUrl, name, duration, image, id, primaryArtists);
    }
  };

  return (
    <MusicContext.Provider
      value={{
        songs,
        setSongs,
        playMusic,
        isPlaying,
        currentSong,
        nextSong,
        prevSong,
        setSearchedSongs,
        searchedSongs,
      }}
    >
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums/:id" element={<AlbumDetails />} />
        </Routes>
      </BrowserRouter>
    </MusicContext.Provider>
  );
}