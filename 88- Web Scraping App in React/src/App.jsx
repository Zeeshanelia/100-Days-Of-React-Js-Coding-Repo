import React, { useState } from 'react'
import 'animate.css';
import { Download, Loader2 } from 'lucide-react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState('')
  const [images,setImages] = useState([])

  const getImage = async (e)=>{
    try {
      e.preventDefault()
      setLoading(true)
      const response = await axios.post("http://localhost:8080/api/images", {url})
      setImages(response.data)
    }
    catch(err)
    {
      toast.error(err.message)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className='bg-gradient-to-r from-indigo-600 to-violet-600 min-h-screen py-12'>
      <div className='flex flex-col items-center'>
        <h1 className='text-5xl font-bold text-white'>Image Downloader</h1>
        <form className='mt-8 mb-12' onSubmit={getImage}>
          <input 
            className='bg-white p-3 rounded-lg w-[450px] mr-4'
            placeholder='Enter website url ?'
            required
            type="url"
            onChange={(e)=>setUrl(e.target.value.trim())}
          />
          <button className='py-3 rounded-lg bg-amber-500 px-8 active:scale-80 duration-300 border border-white shadow'>Grab Image</button>
        </form>
        {
          loading ?
          <div className='py-4'>
            <Loader2 className='animate-spin text-white w-16 h-16' />
          </div>
          :
          <div className='grid grid-cols-4 gap-8 w-10/12'>
            {
              images.map((image, index)=>(
                <div key={index} className='p-8 bg-white shadow-lg rounded-xl animate__animated animate__fadeIn'>
                  <img 
                    src={image}
                    className='w-full'
                  />
                  <a href={image} download="sample.jpg" className='bg-green-500 font-medium text-white flex items-center gap-2 p-3 rounded-lg justify-center mt-4 active:scale-80 duration-300 cursor-pointer'>
                    <Download />
                    Download now
                  </a>
                </div>
              ))
            }
          </div>
        }
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
