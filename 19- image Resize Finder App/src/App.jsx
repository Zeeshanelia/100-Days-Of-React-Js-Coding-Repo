import { useState } from 'react';
import 'animate.css';
import 'remixicon/fonts/remixicon.css';


function App() {
  const [file, setFile] = useState('/vite.svg');
  const [original, setOriginal] = useState({ width: 0, height: 0 });
  const [suggestedHeight, setSuggestedHeight] = useState(0);
  const [suggestedWidth, setsuggestedWidth] = useState(0);

  const chosePhoto = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const selectedFile = input.files[0];
      const url = URL.createObjectURL(selectedFile);
      const img = new Image();
      img.src = url;
      img.onload = () => {
        // setFile({
        //   file: selectedFile,
        //   url: url,
        //   width: img.width,
        //   height: img.height,
        //   consoleLog: console.log(`Image dimensions: ${img.width}x${img.height}`),
        // });
        setOriginal({ width: img.width, height: img.height });
        setFile({
          file: selectedFile,
          url: url,
        })
      };
    };
    input.click();
  }


  const findHeight = (e) => {
    e.preventDefault();
    if (!original.width) return;

    const width = Number(e.target.width.value);
    const height = Math.round((width * original.height) / original.width);
    setSuggestedHeight(height);
  };


  const findWidth = (e) => {
    e.preventDefault();
    if (!original.height) return;

    const height = Number(e.target.height.value);
    const width = Math.round((original.width / original.height) * height);
    setsuggestedWidth(width);
  };



  return (<>

    <div className="py-4 bg-gradient-to-b from-indigo-900 via-blue-400 to-black min-h-screen text-white ">

      <button onClick={chosePhoto}
        type="button"
        className="flex items-center gap-1 mb-2 bg-gray-400 border border-red-300 shadow-xl px-3  rounded ml-32 w-40 appearance-none hover:scale-105 transition-transform duration-300">
        <i className="ri-upload-cloud-2-fill text-xl" />
        <p className="text-xl font-bold">Add Image</p>
      </button>


      <div className="bg-white sm:w-10/12 md:w-8/12 mx-auto min-h-[210px] flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all duration-300 shadow-xl">
        {file ? (
          <img
            src={file.url ? file.url : file}
            alt="Uploaded"
            className="w-82 rounded-xl animate__animated animate__fadeIn"
          />
        ) : (
          <p className="text-gray-500">No image selected</p>
        )}  </div>



      <div className="mt-2 bg-white  w-full sm:w-10/12 md:w-8/12 mx-auto min-h-[165px]  grid grid-cols-2 gap-4 items-center justify-between  rounded-xl cursor-pointer transition-all duration-300 shadow-xl">

        <div className='flex flex-col items-center justify-center'>
          <h1 className='ml-10 rounded py-1 bg-gray-200 border border-red-300 shadow-xl w-36 text-black text-center mb-4 text-lg font-semibold' > Height Find </h1>
          <form onSubmit={findHeight}>
            <input required className='ml-10 rounded py-1 text-black  shadow-xl w-36  text-center' name='width' type="number" placeholder='enter width' />
            <button className='ml-10 rounded py-1 text-black border border-black-2 shadow-xl w-36 bg-blue-500 text-center mt-2 hover:scale-105 transition-transform duration-300 hover:bg-indigo-600' >
              <i className="ri-corner-right-up-fill "></i>
              Find Height
            </button>
          </form>
          <p className='ml-10 text-red-500 text-sm text-center mt-2'> Height Suggestion: {suggestedHeight} px </p>
        </div>


        <div className='flex flex-col items-center justify-center'>
          <h1 className='ml-10 rounded py-1 bg-slate-400 border border-red-300 shadow-xl w-36 text-black text-center mb-4 text-lg font-semibold' > Width Find </h1>

          <form onSubmit={findWidth}>
            <input required className='ml-10 rounded py-1 text-black  shadow-xl w-36  text-center' name='height' type="number" placeholder='enter width' />
            <button className='ml-10 rounded py-1 text-black border border-black-2 shadow-xl w-36 bg-blue-500 text-center mt-2 hover:scale-105 transition-transform duration-300 hover:bg-indigo-600' >
              <i className="ri-corner-left-up-line"></i>
              Find Height
            </button>
          </form>
          <p className='ml-10 text-red-500 text-sm text-center mt-2'> <p>Width Suggestion: {suggestedWidth}px</p>
          </p>
        </div>



        <div>
          {/* <p className="text-gray-500">File Size: {file.file ? `${(file.file.size / 1024).toFixed(2)} KB` : 'N/A'}</p> */}
        </div>
      </div>

    </div>
  </>
  );
}

export default App;