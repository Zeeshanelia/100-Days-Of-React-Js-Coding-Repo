import { ToastContainer, toast } from 'react-toastify'
import {  useState } from 'react'
import getYouTubeID from 'get-youtube-id';
import 'animate.css';
import 'remixicon/fonts/remixicon.css'


function App() {
  const [url, setUrl] = useState(" ")
  const [thumnails, setThumnails] = useState([])

  const urlModel = [
    {
      width: '120',
      height: '90',
      url: 'https://img.youtube.com/vi/VIDEO_ID/default.jpg',
      file: 'default.jpg'
    },
    {
      width: '320',
      height: '180',
      url: 'https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg',
      file: 'mqdefault.jpg'
    },
    {
      width: '480',
      height: '360',
      url: 'https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg',
      file: 'hqdefault.jpg'
    },
    {
      width: '640',
      height: '480',
      url: 'https://img.youtube.com/vi/VIDEO_ID/sddefault.jpg',
      file: 'sddefault.jpg'
    },
    {
      width: '1280',
      height: '720',
      url: 'https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg',
      file: 'maxresdefault.jpg'
    },
  ]


//   const fetchThumnail = (e) => {
//     e.preventDefault()
//     const videoId = getYouTubeID(url)
//     if (videoId) {
//       const model = urlModel.map((item) => {
//         return {
//           ...item,
//           url: item.url.replace('VIDEO_ID', videoId)
//         }
//       })
//       setThumnails(
//         {
//           ...thumnails,
//           ...model
//   }
//       )
// }

// else {
//   toast.error("invalid Yt url")
// }
//   }




const fetchThumnail = (e) => { 
  e.preventDefault();
  const videoId = getYouTubeID(url);

  if (!videoId) {
    toast.error("Invalid YouTube URL");
    return;
  }

  
  const model = urlModel.map((item) => {
    const finalUrl = `https://img.youtube.com/vi/${videoId}/${item.file}`;
    console.log("Generated URL:", finalUrl);
    return {
      ...item,
      url: finalUrl
    };
  });
  setThumnails(model);
};




return (
  <>
    <div className='flex justify-center  min-h-screen bg-gradient-to-br from-gray-400 via-pink-700 to-slate-400 py-2'>

      <div className='w-10/12 backdrop-blur-6xl border border-gray-600 flex flex-col items-center shadow-xl p-3 border mb-10 rounded-lg mt-4'>

        <p className='text-xl font-bold text-indigo-300 tracking-wide'> Thumnail Resize ReactJs App </p>


        <form onSubmit={fetchThumnail} className='flex justify-center text-center space-x-6 mt-4'>
          <input className='w-86 p-2 bg-white border-2 rounded '
            placeholder='Past here youtube url or enter video id'
            onChange={e => setUrl(e.target.value)}
            required type='url' />

          <button  className='font-semibold text-medium bg-gradient-to-l from-orange-600 to-pink-700 hover:scale-110 transition-transform duration-100 rounded p-2'>
            <i className="ri-search-eye-line font-semibold text-xl"></i>
            Search
          </button>
        </form>



        <div className='w-full space-y-4 mt-6  gap-6 grid grid-cols-3 justify-center'>
          {thumnails.map((item, index) => (
            <div className='bg-white p-10 rounded-md' key={index}>
              <img src={item.url} className='w-full min-h-[15rem] object-cover' />

              <div className='flex justify-between'>
                <h1 className='mt-4 font-bold'> {item.width}*{item.height}</h1>

             <a href={item.url} target='_blank'>
               <button  className='font-semibold text-medium bg-gradient-to-l from-slate-300 to-yellow-400 hover:scale-110 transition-transform duration-100 rounded p-1 mt-2'>
            <i className="ri-download-2-fill font-semibold text-xl"></i>
            Download
          </button>
             </a>
              </div>
            </div>
          ))}
        </div>
      </div>



      <ToastContainer />
    </div>
  </>
)
}

export default App









