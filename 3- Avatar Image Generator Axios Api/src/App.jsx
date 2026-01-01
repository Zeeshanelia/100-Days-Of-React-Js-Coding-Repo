import { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import 'animate.css';
const API_KEY = "Clkt7MebuStvBjaw6TRE8h5TaEdOEYAKzSLj0kTBBOkiplsIybX2Ejz7"

function App() {
  const [img, setImg] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [quary, setQuary] = useState('people')

  const loadMore = () => {
    // setPage(page+1)
    setPage(prev => prev + 1)  // prev = 1 → becomes 2
  }

  const fetchingImg = async () => {
    try {
      const optionss = {
        headers: {
          Authorization: API_KEY
        }
      }
      setLoading(true)
      const Resp = await axios.get(`https://api.pexels.com/v1/search?query=${quary}&page=${page}&per_page=12
`, optionss)
      console.log(Resp)
      // setImg(Resp.data.photos)
      setImg([
        ...img,
        ...Resp.data.photos
      ])

    } catch (error) {
      toast.error("Error in Fetching Img Data")
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchingImg()
  }, [page, quary])

  
  const Searched = (e) => {
    e.preventDefault()
    const q = e.target[0].value.trim()
    setImg([])
    setQuary(q)
  }

  return (<>
    <div className='min-h-screen bg-gray-100 py-2 animate__animated animate__headShake'>
      <div className='w-11/12 mx-auto flex flex-col items-center shadow-xl p-3'>
        <h5 className='text-3xl font-bold text-slate-500'>
          🎬📽️ Images Finder Gallery {page} </h5>
      </div>

      <form onSubmit={Searched} className='flex justify-center space-x-2 py-6 mb-6'>
        <input required className='w-3/12  p-2 rounded border' />

        <button className='bg-blue-400 hover:bg-blue-500 rounded border p-2'> Search
        </button>
      </form>


      {
        img.length === 0 && <h4 className='text-center'> Data Not Found</h4>
      }


      {
        loading &&
        <div className="flex justify-center items-center h-screen">
          <i className="ri-loader-5-line text-4xl animate-spin"></i>
        </div>

        /* The parent must have a height (e.g., h-screen, h-full, or a fixed height).
        To center the spinner properly, you need to apply the flexbox centering on the parent containe
        */
      }

      <div className='grid md:grid-cols-5 gap-6 w-11/12  mx-auto'>

        {
          img.map((item, index) => (
            <div key={index} className='p-1   md:h-[210px] rounded broder bg-red-200 object-fit hover:scale-110 transition-transform duration-300 space-y-4'>
              <div>

                <img className='object-cover w-full h-[180px] hover:scale-120 transition-transform duration-300 rounded' src={item.src.medium} />

                <div className='flex justify-between bg-green-300   '>
                  {item.photographer}

                  <a target='_blank' href={item.src.medium} className='transition-transform duration-300 rounded hover:scale-120 hover:bg-red-500'>Download</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>





      {
        img.length > 0
        &&
        <button
          onClick={loadMore}
          className="block w-34 mx-auto text-center mt-6 text-xl font-semibold p-1 bg-blue-300 rounded"> Load more..
        </button>
      }



      <ToastContainer />
    </div>
  </>
  )
}

export default App


