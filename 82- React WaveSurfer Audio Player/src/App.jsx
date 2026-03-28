import { Pause, Play, Plus, StepBack, StepForward, Volume2, VolumeOff } from 'lucide-react'
import React, { useRef, useState } from 'react'
import WavesurferPlayer from '@wavesurfer/react'
import 'animate.css';

const App = () => {
  const audio = useRef(null)
  const [url, setUrl] = useState("/sample.mp3")
  const [filename, setFilename] = useState(url.split("/").pop())
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [muted, setMuted] = useState(false)

  const onReady = (ws)=>{
    audio.current = ws
    setDuration(ws.getDuration())
    ws.on("audioprocess", (time)=>{
      setCurrentTime(time)
    })
  }

  const formatDuration = (second)=>{
    const h = Math.floor(second/3600).toString().padStart(2, "0")
    const m = Math.floor((second % 3600) / 60).toString().padStart(2, "0")
    const s = Math.floor(second % 60).toString().padStart(2, "0")
    return `${h}:${m}:${s}`
  }

  const playPause = ()=>{
    if(audio.current)
    {
      const player = audio.current
      player.playPause()
    }
  }

  const chooseSong = ()=>{
    const input = document.createElement("input")
    input.type = "file"
    input.accept = "audio/*"
    input.click()
    input.onchange = ()=>{
      const file = input.files[0]
      setFilename(file.name)
      const uri = URL.createObjectURL(file)
      setUrl(uri)
    }
  }

  const handleMute = ()=>{
    if(audio.current)
    {
      const player = audio.current
      const isMuted = player.getMuted()
      player.setMuted(!isMuted)
      setMuted(!isMuted)
    }
  }

  const seek = (time)=>{
    if(audio.current)
    {
      const player = audio.current
      let currentTime = player.getCurrentTime() + time
      const duration = player.getDuration()

      if(currentTime < 0)
        currentTime = 0

      if(currentTime > duration)
        currentTime = duration

      player.seekTo(currentTime / duration)
    }
  }

  return (
    <div className='bg-rose-50 h-screen flex items-center justify-center animate__animated animate__fadeIn'>
      <div className='w-4xl rounded-xl bg-gradient-to-r from-perple-900 via-black/60 to-green-600 animate__animated animate__slideInUp'>
        <div className='px-8 py-6 border-b border-b-white flex justify-between items-center'>
          <h1 className='text-xl font-semibold text-white capitalize'>
            <marquee>
                {filename}
            </marquee>
          </h1>
          <label className='text-white font-medium'>{formatDuration(currentTime)} / {formatDuration(duration)}</label>
        </div>
        <div className='bg-white p-8'>
          <WavesurferPlayer
            height={100}
            waveColor="black"
            url={url}
            onReady={onReady}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        </div>
        <div className='px-8 py-6 border-t border-t-white flex justify-center items-center gap-8'>
          <button onClick={chooseSong} className='bg-white w-12 h-12 rounded-full flex items-center justify-center shadow hover:scale-110 duration-300 active:scale-80'>
            <Plus />
          </button>

          <button onClick={()=>seek(-10)} className='bg-white w-12 h-12 rounded-full flex items-center justify-center shadow hover:scale-110 duration-300 active:scale-80'>
            <StepBack />
          </button>

          <button onClick={playPause} className='bg-white w-18 h-18 rounded-full flex items-center justify-center shadow hover:scale-110 duration-300 active:scale-80'>
            {
              isPlaying ?
              <Pause />
              :
              <Play />
            }
          </button>

          <button onClick={()=>seek(10)} className='bg-white w-12 h-12 rounded-full flex items-center justify-center shadow hover:scale-110 duration-300 active:scale-80'>
            <StepForward />
          </button>

          <button onClick={handleMute} className='bg-white w-12 h-12 rounded-full flex items-center justify-center shadow hover:scale-110 duration-300 active:scale-80'>
            {
              muted ?
              <VolumeOff />
              :
              <Volume2 />
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
