import "animate.css";
import { useState } from 'react';

function App() {


  return (
    <>
      <div className="min-h-screen  text-white ">
        <div className="w-10/12 mx-auto bg-slate-300 py-2 min-h-screen">

          <h1 className='py-2 text-center text-2xl font-bold border text-black mx-auto w-56'>AI Chat Bot</h1>
          <div className="p-5">
            <div className="flex flex-col justify-start">
              <small className="text-black">Typing..</small>
              <div className="bg-purple-400 p-1 w-fit rounded"> abc </div>
            </div>

             <div className="flex justify-end">
            <div className="bg-green-400 p-1 w-fit rounded"> abc </div>
          </div>
          </div>



          <div className="w-10/12  bg-slate-600 fixed bottom-0 p-4 ">
            <form className="flex gap-2">
              <input type="text" placeholder="Write here" className="w-full border p-2 rounded-lg" />

              <button className="flex flex-col justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 rounded-lg p-2 w-32">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default App


