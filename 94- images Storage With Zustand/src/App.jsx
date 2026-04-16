import 'animate.css'
import { Download, Trash2, Upload } from 'lucide-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useImageStore } from './zustand/useImageStore'

const FIVE_MB = 5 * 1024 * 1024

const App = () => {
  const { images, setImage, deleteImage } = useImageStore()

  const chooseFile = (e) => {
    const file = e.target.files?.[0]

    // Prevent crash
    if (!file) return

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file", { position: 'top-center' })
      return
    }

    if (file.size > FIVE_MB) {
      toast.error("File size must be less than 5MB", { position: 'top-center' })
      return
    }

    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onload = () => {
      setImage({
        id: Date.now(),
        name: file.name,
        size: file.size,
        binary: fileReader.result,
        createdAt: new Date()
      })

      toast.success("Image uploaded successfully!")
    }

    // allow same file upload again
    e.target.value = ""
  }

  const downloadImage = (item) => {
    const a = document.createElement("a")
    a.href = item.binary
    a.download = item.name
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <div className='bg-slate-100 min-h-screen px-6'>
      <div className='lg:w-9/12 mx-auto py-10 space-y-8'>

        {/* Title */}
        <h1 className='text-4xl font-bold text-center text-slate-800'>
          Image Storage
        </h1>

        {/* Upload Section */}
        <button className='w-full relative cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-xl lg:w-8/12 mx-auto border-2 border-dashed border-indigo-300 flex flex-col gap-3 items-center text-white py-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl'>

          <Upload className='w-14 h-14' />
          <h1 className='text-lg font-medium'>
            Click to upload image
          </h1>

          <input
            type="file"
            accept="image/*"
            className='absolute top-0 left-0 opacity-0 w-full h-full rounded-2xl'
            onChange={chooseFile}
          />
        </button>

        {/* Images Grid */}
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6'>
          {images.map((item) => (
            <div
              key={item.id}
              className='overflow-hidden rounded-xl shadow-md bg-white'
            >
              <img
                src={item.binary}
                alt={item.name}
                className='w-full h-[150px] object-cover hover:scale-110 transition-transform duration-300'
              />

              <div className='p-3'>
                <h1 className='font-semibold text-slate-700 truncate'>
                  {item.name}
                </h1>

                <p className='text-gray-500 text-sm'>
                  {(item.size / (1024 * 1024)).toFixed(2)} MB
                </p>

                <div className='mt-3 flex gap-3'>

                  {/* Download */}
                  <button
                    onClick={() => downloadImage(item)}
                    className='w-9 h-9 bg-emerald-500 rounded-md flex items-center justify-center text-white hover:bg-emerald-600 hover:scale-105 transition'
                  >
                    <Download className='w-4 h-4' />
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => deleteImage(item.id)}
                    className='w-9 h-9 bg-rose-500 rounded-md flex items-center justify-center text-white hover:bg-rose-600 hover:scale-105 transition'
                  >
                    <Trash2 className='w-4 h-4' />
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <ToastContainer />
    </div>
  )
}

export default App