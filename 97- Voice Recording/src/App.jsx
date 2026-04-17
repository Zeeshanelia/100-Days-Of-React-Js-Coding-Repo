import React, { useEffect, useRef, useState } from 'react'
import "animate.css"

const App = () => {
  const mediaRecorderRef = useRef(null)
  const chunksRef = useRef([])
  const [url, setUrl] = useState(null)
  const [isRecording, setRecording] = useState(false)
  const [time, setTime] = useState(0)
  const timeRef = useRef(null)

  const startRecording = async ()=>{
    try {
      const stream = await navigator.mediaDevices.getUserMedia({audio: true})
      mediaRecorderRef.current = new MediaRecorder(stream)
      mediaRecorderRef.current.start(1000)
      setRecording(true)

      mediaRecorderRef.current.ondataavailable = (e)=>{
        chunksRef.current.push(e.data)
      }

      mediaRecorderRef.current.onstop = ()=>{
        const blob = new Blob(chunksRef.current, {type: "audio/webm"})
        const u = URL.createObjectURL(blob)
        setUrl(u)
        setRecording(false)
        chunksRef.current = []
        stream.getTracks().forEach(track=>track.stop())
      }

      timeRef.current = setInterval(()=>{
        setTime(t => t+1)
      }, 1000)

    }
    catch(err)
    {
      console.log("Error - ", err.message)
    }
  }

  const stopRecording = ()=>{
    mediaRecorderRef.current.stop()
    setRecording(false)
    clearInterval(timeRef.current)
  }

  const downloadAudio = (link)=>{
    const a = document.createElement("a")
    a.href = link
    a.download = "recording.webm"
    a.click()
  }

  const formatDuration = (t)=>{
    const m = String(Math.floor(t / 60)).padStart(2, "0")
    const s = String(Math.floor(t % 60)).padStart(2, "0")
    return `${m}:${s}`
  }

  useEffect(()=>{
    return ()=>clearInterval(timeRef.current)
  }, [])

  return (
    <div className='overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400'>
      <div className='animate__animated animate__slideInUp w-[380px] bg-white/40 backdrop-blur-xl rounded-3xl p-9 shadow-2xl border border-white/10'>
        <h1 className='text-2xl font-bold text-center mb-6'>
          🎙️ Voice Recorder
        </h1>
        <div className='text-center text-4xl font-mono mb-6 text-black font-bold'>
          {formatDuration(time)}
        </div>
        <div className='flex gap-4 justify-center mb-6'>
            {
              isRecording ?
              <button onClick={stopRecording} className='px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 active:scale-95 transition'>Stop</button>
              :
              <button onClick={startRecording} className='px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 active:scale-95 transition'>Start</button>
            }

        </div>
        {
          url &&
          <div className='space-y-4'>
            <audio
              src={url}
              controls
              className='w-full'
            />

            <button onClick={()=>downloadAudio(url)} className='text-white w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition'>Download</button>
          </div>
        }
      </div>
    </div>
  )
}

export default App