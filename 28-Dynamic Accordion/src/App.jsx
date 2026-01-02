import { useState } from 'react'
import "animate.css";
import { useEffect } from 'react';
import faqData from '../src/faqData.json';
import UiFaq from './UiFaq';

function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    setData(faqData);
  },[ ])

  return (
    <>
      <div className="min-h-screen bg-gradient-to-l from-green-500 to-purple-400 text-white flex justify-center">

        <div className="space-y-2 mt-2 w-full max-w-4xl p-4">

          <h1 className=" max-w-3xl mx-auto text-center  rounded-lg shadow-xl p-2 font-bold text-2xl text-black"> Dynamic Accordion  !</h1>
        

            <div>
              {data.map((item)=>(
                <div key={item.id} className="  text-black rounded-lg shadow-lg  p-4 mb-4 animate__animated animate__fadeInUp">

                  <UiFaq data={item} />
                  

                </div>
              ))}
            </div>
            </div>
      </div>

    </>
  )
}

export default App




 
 
