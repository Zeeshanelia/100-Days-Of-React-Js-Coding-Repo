import { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import img1 from ".././public/images/img1.jpg";
import img3 from ".././public/images/img3.jpg";
import img4 from ".././public/images/img4.jpg";
import img5 from ".././public/images/img5.jpg";
import img6 from ".././public/images/img6.jpg";

function App() {
  const [Sliding, setSliding] = useState(1)

  const dataModel = [img1, img3, img4, img5, img6]

   const nextClick = () => {
   setSliding((prev) => (prev + 1) % dataModel.length); // Move next by 1 item
  };


  const prevClick = () => {
    setSliding((prev) => (prev - 1 + dataModel.length) % dataModel.length)
  };

  
 useEffect(() => {
  const clearSlider = setInterval(nextClick, 2000);
  return () => clearInterval(clearSlider);     // setInterval cleanup
}, []);


  return (
    <>  <div className='flex justify-center  min-h-screen  w-full bg-gray-400'>

        <div className='w-11/12 backdrop-blur-6xl bg-gradient-to-br from-indigo-700 via-blue-900 to-slate-900  flex flex-col items-center shadow-xl   mb-10 rounded-lg min-h-screen'>

          <p className='text-2xl font-bold text-indigo-200 tracking-wide'> Custom Slider </p>



          <div className="flex items-center mt-8 gap-10 w-full justify-center ">
                <div
                  onClick={prevClick}
                  className="ml-10 p-3 w-10 h-10 text-xl rounded-full bg-gray-200 hover:bg-gray-500 mx-1 flex items-center justify-center">
                  <FaArrowLeft className='' />
                </div>



                {dataModel.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    className={`${index === Sliding ? "block" : "hidden"
                      } cursor-pointer mx-auto  w-[55rem] object-cover rounded-lg hover:scale-110 transition-transform duration-300`}/>
                ))}



                <div
                  onClick={nextClick}
                  className="p-3 w-10 h-10 text-xl rounded-full bg-gray-200 hover:bg-gray-500 mx-1 flex items-center justify-center">
                  <FaArrowRight />
                </div>
              </div>
            

          </div>
        </div>    
        </>
  )
}

export default App


