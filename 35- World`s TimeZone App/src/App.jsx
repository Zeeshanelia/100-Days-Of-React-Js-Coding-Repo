import countriesWithTimezones from './countriesWithTimezones'
import "animate.css";
import moment from 'moment-timezone';
import { useEffect, useState } from 'react';

function App() {
const [ time , setTime] = useState(moment())

useEffect(()=>{

  const interval = setInterval(()=>{
setTime(moment())
  } ,1000)
  
  return(
    clearInterval(interval)
  )
},[])

  return (
    <>
      <div className="min-h-screen bg-gradient-to-l from-black to-purple-600 text-white flex flex-col">

        <div className="w-10/12 mx-auto py-8 ">
          <h1 className=' py-8 text-center text-2xl font-bold'>world clock's</h1>
          <div className="grid grid-cols-4 gap-7">
            {
              countriesWithTimezones.map((item , index ) => (
                <div className='bg-white p-6 text-black font-bold rounded hover:scale-120 duration-300'>
                  <div className='flex justify-between'>
                     <p className='text-gray-500'>{item.country}</p>
                   <p className='text-gray-500'>{item.timezone}</p>
                  </div >

                   <p className='text-center text-4xl text-red-500 p-1 font-bold'>{time.tz(item.timezone).format(" hh:mm:ss A")}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default App


