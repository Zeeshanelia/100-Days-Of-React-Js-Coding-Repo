import { ToastContainer, toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import 'animate.css';
import 'remixicon/fonts/remixicon.css'

const data = [
  {
    label: "Illustration",
    value: "illustration",
    url: "https://api.dicebear.com/7.x/avataaars/svg?seed="
  },
  {
    label: "Cartoon",
    value: "cartoon",
    url: "https://api.dicebear.com/7.x/avataaars/svg?seed="
  },
  {
    label: "Sketchy",
    value: "sketchy",
    url: "https://api.dicebear.com/7.x/croodles/svg?seed="
  },
  {
    label: "Robots",
    value: "robots",
    url: "https://api.dicebear.com/7.x/bottts/svg?seed="
  },
  {
    label: "Art",
    value: "art",
    url: "https://api.dicebear.com/7.x/pixel-art/svg?seed="
  },
  {
    label: "Male",
    value: "male",
    url: "https://randomuser.me/api/portraits/men"
  },
  {
    label: "Female",
    value: "female",
    url: "https://randomuser.me/api/portraits/women"
  }
]


function App() {
  const [src, setSrc] = useState(null)
  const [options, setOptions] = useState("male")
  const [loading, setLoading] = useState(false)


  const generate = () => {
    const obj = data.find((item) => item.value === options)
    const url = obj.url

    // male & female handling
    if (options === "male" || options === "female") {
      const humanUrl = `${url}/${randomNum()}.jpg`;
      setSrc(humanUrl);
      console.log("URL:", humanUrl);
    } else {
      const uniqueVal = Date.now()
      const imgUrl = `${url}${uniqueVal}`
      setSrc(imgUrl)
    }
  }

  const randomNum = (e) => {
    const random = Math.floor(Math.random() * 99) + 1
    return random
  }

  const onOptionsChange = (e) => {
    const val = e.target.value
    setOptions(val)
  }

  useEffect(() => {
    generate()

  }, [options])

  const Download = (url) => {
    const a = document.createElement('a')
    a.href = url,
      a.Download = `${Date.now()}.jpg`
    a.click()
    a.remove()
  }

  const copyBtn = (url) => {
    navigator.clipboard.writeText(url)
    toast.success('Copied', { position: "top-center" })
  }

  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 py-2 animate__animated animate__fadeIn'>

        <div className='w-6/12 backdrop-blur-6xl border border-slate-600 flex flex-col items-center shadow-xl p-3 border mb-10 animate__animated animate__wobble'>

          <img className='rounded-full w-28 h-28 border border-slate-600 shadow-xl'
            src={src || "/images/avt.jpg"}

          // src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
          />

          <div className='text-center'>
            <p className='text-xl font-bold text-indigo-300 tracking-wide'> Avatar Auto Pictures Generator Unlimited </p>

            <p className='text-indigo-200'>compatible for all developers and thier web project</p>
          </div>


          <div className='w-full space-y-4 mt-2 flex gap-2  justify-center'>
            <select onChange={onOptionsChange} value={options} className='bg-slate-600 rounded p-2 max-w-66 font-semibold text-medium'>

              {
                data.map((item, index) => (
                  <option key={index} value={item.value}> {item.label}</option>
                ))
              }


            </select>


            <div >
              <p className='bg-slate-600 rounded p-2 min-w-66 font-semibold text-medium'> {src}</p>
            </div>

          </div>


          <div onClick={generate} className='flex w-full gap-3 justify-center'>
            <button className='font-semibold text-medium bg-gradient-to-l from-pink-900 to-green-400 hover:scale-110 transition-transform duration-100 rounded p-2'>
              <i className="ri-swap-2-line font-semibold text-xl"></i>
              Change
            </button>



            <button onClick={() => Download(src)} className='font-semibold text-medium bg-gradient-to-l from-blue-300 to-gray-800 hover:scale-110 transition-transform duration-100 rounded p-2'>
              <i className="ri-swap-2-line font-semibold text-xl"></i>
              Download
            </button>


            <button onClick={() => copyBtn(src)} className='font-semibold text-medium bg-gradient-to-r from-pink-900 to-slate-300 hover:scale-110 transition-transform duration-100 rounded p-2'>
              <i className="ri-swap-2-line font-semibold text-xl"></i>
              Copy
            </button>

          </div>
        </div>

        {
          loading &&
          <div className=" h-screen">
            <i className="ri-loader-5-line text-4xl animate-spin">  </i>
          </div>
        }

        <ToastContainer />
      </div>
    </>
  )
}

export default App









