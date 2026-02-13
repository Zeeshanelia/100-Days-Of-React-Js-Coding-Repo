import { ToastContainer, toast } from 'react-toastify'


function App() {
  return (
    <>
      <div className='min-h-screen bg-gray-200 py-5'>
        <aside className='overflow-hidden space-y-2 bg-red-200 fixed top-0 left-0 w-[300px] h-full px-4 py-2'>

          <div className='bg-white w-full p-3 rounded-lg'>
            {Array(7).fill(0).map((item, index) => (
              <button key={index} className='flex items-start gap-1 w-full hover:bg-gray-100 rounded hover:p-2 duration-200'> B
                <div className='flex flex-col '>
                  <label htmlFor=""> trip plan</label>
                  <label className="text-gray-400 "> Date 31232</label>
                    </div>
              </button>

            ))}
          </div>

          <button className='w-full h-7 rounded bg-green-200 hover:bg-green-400 '> New File </button>
        </aside>


        <section className='ml-[300px] py-12'>

          <div className='w-11/12 mx-auto bg-white  rounded-lg'>
            <div className='px-5 py-2 border-b border-gray-400 border-dashed flex justify-between items-center'>

              <div>
                <h1 className='text-xl font-medium '> My next trip planing </h1>
                <label htmlFor="" className='text-gray-400 '> date 12 12 12 </label>
              </div>
              <div className='space-x-3'>
                <button className='w-12 h-7 rounded bg-green-200 hover:bg-green-400'> edit </button>
                <button className='w-12 h-7 rounded bg-green-200 hover:bg-green-400'> delete</button>
              </div>
            </div>

            <div className='p-6'>

              <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, laboriosam ullam praesentium tempora veritatis assumenda magni excepturi expedita optio error cupiditate repellat porro autem et eos nam rerum alias dolores.</p>

            </div>

          </div>
        </section>
        {/* <ToastContainer /> */}
      </div>
    </>
  )
}

export default App
