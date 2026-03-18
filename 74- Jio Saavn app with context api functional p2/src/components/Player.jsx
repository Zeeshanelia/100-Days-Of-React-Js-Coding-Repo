import { BiRepeat } from "react-icons/bi";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { PiShuffleBold } from "react-icons/pi";
import { FaPlay, FaPause } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { LuHardDriveDownload } from "react-icons/lu";
import { useState, useRef, useEffect, useContext } from "react";
import MusicContext from "../context/MusicContext";

const Player = () => {
  const { currentSong, playMusic, nextSong, prevSong } = useContext(MusicContext);
  const [isVolumeVisible, setIsVolumeVisible] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (!currentSong?.audio) return;

    const audioElement = currentSong.audio;

    const handleTimeUpdate = () => {
      const duration = Number(currentSong.duration);
      const currentTime = audioElement.currentTime;
      const newTiming = (currentTime / duration) * 100;
      if (inputRef.current) {
        inputRef.current.value = newTiming;
      }
    };

    const handleSongEnd = () => nextSong();

    audioElement.addEventListener("timeupdate", handleTimeUpdate);
    audioElement.addEventListener("ended", handleSongEnd);

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      audioElement.removeEventListener("ended", handleSongEnd);
    };
  }, [currentSong, nextSong]);

  const handleProgressChange = (event) => {
    const newPercentage = parseFloat(event.target.value);
    const newTime = (newPercentage / 100) * Number(currentSong.duration);
    if (newTime >= 0) {
      currentSong.audio.currentTime = newTime;
    }
  };

  const handleDownloadSong = async (url) => {
    try {
      const res = await fetch(url);
      const blob = await res.blob();

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${currentSong.name}.mp3`;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    } catch (error) {
      console.log("Error fetching or downloading files", error);
    }
  };


if (!currentSong) return (
  <div className="fixed bottom-0 right-0 left-0 bg-gradient-to-r from-violet-50 to-purple-900 shadow-[0_-4px_20px_rgba(139,92,246,0.4)] flex items-center justify-center gap-4 p-4">
    <div className="w-10 h-10 rounded-lg bg-violet-800 animate-pulse" />
    <div className="flex flex-col gap-2">
      <div className="w-32 h-2.5 bg-violet-800 rounded-full animate-pulse" />
      <div className="w-20 h-2 bg-purple-800 rounded-full animate-pulse" />
    </div>
    <div className="flex gap-4 ml-6">
      <div className="w-6 h-6 rounded-full bg-violet-800 animate-pulse" />
      <div className="w-6 h-6 rounded-full bg-violet-800 animate-pulse" />
      <div className="w-6 h-6 rounded-full bg-violet-800 animate-pulse" />
    </div>
    <p className="text-xs text-violet-400 ml-4 hidden lg:block">Select a song to play</p>
  </div>
);

  return (
    <div className="fixed bottom-0 right-0 left-0 bg-[#f5f5f5ff] flex flex-col">
      <input
        type="range"
        name="progress"
        id="progress"
        min={0}
        max={100}
        step="0.1"
        defaultValue={0}
        ref={inputRef}
        onChange={handleProgressChange}
        className="w-full h-[5px] text-red-400 range"
      />
      <div className="flex justify-between items-center mb-3 px-3">
        {/* 1st div */}
        <div className="flex justify-start items-center gap-3 lg:w-[30vw]">
          <img
            src={currentSong.image?.[2]?.link || currentSong.image?.[0]?.link}
            alt={currentSong.name}
            width={55}
            className="rounded-lg"
          />
          <div className="hidden lg:block">
            <p className="text-xs text-gray-500">
              {currentSong.name}
            </p>
          </div>
        </div>

        {/* 2nd div */}
        <div className="flex text-2xl lg:text-3xl gap-4 lg:gap-6 lg:w-[40vw] justify-center">
          <BiRepeat className="text-gray-400 cursor-pointer" />
          <IoMdSkipBackward
            onClick={prevSong}
            className="text-gray-700 hover:text-gray-500 cursor-pointer"
          />
          <FaPlay
            className="text-gray-700 hover:text-gray-500 cursor-pointer"
            onClick={() =>
              playMusic(
                currentSong.audio,
                currentSong.name,
                currentSong.duration,
                currentSong.image,
                currentSong.id
              )
            }
          />
          <IoMdSkipForward
            onClick={nextSong}
            className="text-gray-700 hover:text-gray-500 cursor-pointer"
          />
          <PiShuffleBold className="text-gray-400 cursor-pointer" />
        </div>

        {/* 3rd div */}
        <div
          className="flex lg:w-[30vw] justify-end items-center"
          onMouseEnter={() => setIsVolumeVisible(true)}
          onMouseLeave={() => setIsVolumeVisible(false)}
        >
          <LuHardDriveDownload
            onClick={() => handleDownloadSong(currentSong.audio.src)}
            className="text-gray-700 hover:text-gray-500 text-2xl lg:text-3xl cursor-pointer lg:mr-2"
          />
          <HiSpeakerWave className="text-gray-700 hover:text-gray-500 text-2xl lg:text-3xl cursor-pointer hidden lg:block" />
        </div>
      </div>
    </div>
  );
};

export default Player;