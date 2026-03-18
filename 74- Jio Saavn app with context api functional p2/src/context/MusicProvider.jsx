import { useState } from "react";
import MusicContext from "./MusicContext";

const MusicProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = (downloadUrl, name, duration, image, id, primaryArtists) => {
    setCurrentSong({ downloadUrl, name, duration, image, id, primaryArtists });
    setIsPlaying(true);
  };

  const nextSong = () => {};
  const prevSong = () => {};

  return (
    <MusicContext.Provider value={{ currentSong, isPlaying, playMusic, nextSong, prevSong }}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicProvider;