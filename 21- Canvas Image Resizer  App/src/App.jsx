import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

function App() {
  const [imgFile, setImgFile] = useState('images/img-resize-finder.jpg');
  const [form, setForm] = useState({ width: "", height: "" })
  const [imgResized, setImgResized] = useState('images/img-resize-finder.jpg');


  const showPhoto = (e) => {
    const input = e.target
    const file = input.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setImgFile(url)


  }

  const handleChange = (e) => {
    const input = e.target
    const name = input.name
    const value = input.value
    setForm({
      ...form,
      [name]: value
    })
  }

  const resizingPhoto = (e) => {
    e.preventDefault()


    const img = new Image()
    img.src = imgFile
    img.onload = () => {

      const canvas = document.createElement('canvas')
      const targetWidth = Number(form.width)
      const targetHeight = Number(form.height)
      //          Add validation before resizing.
      if (!targetWidth || !targetHeight) return


      canvas.width = targetWidth
      canvas.height = targetHeight
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight)
      const imgString = canvas.toDataURL("image/webp")
      setImgResized(imgString)

    }
  }

  return (<>
    <div className="py-4 bg-gradient-to-b from-indigo-900 via-blue-400 to-black min-h-screen text-white ">

      <div className="grid grid-cols-2 gap-4 items-center justify-center bg-white sm:w-10/12 md:w-11/12 mx-auto min-h-[440px]  rounded-xl cursor-pointer text-black p-1">

        <div className='space-y-6'>
          <h1 className='text-xl font-semibold text-center border p-2 w-56 mx-auto mt-1'>Image Resize Here 👇</h1>

          <div className='relative'>
            <img src={imgFile} className='h-82' alt="" srcset="" />
            <input onChange={showPhoto} accept='image/*' type="file" className='absolute w-full h-full top-0 left-0 text-bold opacity-0'
            /></div>




          <form className='flex mr-10 text-black' onSubmit={resizingPhoto}>

            <input disabled={imgFile === 'images/img-resize-finder.jpg'}
              onChange={handleChange} type='number' name='width' placeholder='Width' required className='rounded p-2 bg-slate-200 border mx-auto w-36 h-10' />

            <input disabled={imgFile === 'images/img-resize-finder.jpg'}
              onChange={handleChange} type='number' name='height' placeholder='Height' required className='rounded p-2 bg-slate-200 border mx-auto w-36 h-10' />

            <button
              disabled={imgFile === 'images/img-resize-finder.jpg'}
              type="submit" className=" bg-gray-400 border border-red-300 shadow-xl px-2 rounded text-center w-28 appearance-none hover:bg-gray-600  hover:scale-105 transition-transform duration-300 text-xl">

              <i className="ri-crop-2-fill"></i> Resize
            </button>
          </form>
        </div>

        <div className=''>
          <h1 className='text-xl font-semibold text-center border p-2 w-28 mx-auto mb-4'>Output </h1>
          {/* {JSON.stringify(form)} */}
         <img src={imgResized} className="mb-14 h-82" alt="" />
        </div>

      </div>




    </div>
  </>
  );
}

export default App;