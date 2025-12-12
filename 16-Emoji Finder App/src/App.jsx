import { useState } from "react";
// import { emojiList } from './emojisList';
import { emojisList as emojiList } from "./emojisList.js";
import "./App.css";

const App = () => {
  const [emoji, setEmoji] = useState(emojiList);
  const serachEmoji = (e) => {
    const val = e.target.value.toLowerCase().trim()
    if (!val) {
      setEmoji(emojiList)
      return
    }
    const filteringData = emoji.filter((items) => (
      items.name.includes() ||
      items.keywords.join(' ').includes(val)))
    setEmoji(filteringData)
  }

  const Download = async (emojiChar) => {
  const canvas = document.createElement("canvas"); // Create Canvas
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#ffffff";    // White background
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = "300px sans-serif"; // Draw emoji
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(emojiChar, canvas.width / 2, canvas.height / 2);

  const imageURL = canvas.toDataURL("image/png"); // Convert to image
  const a = document.createElement("a");  // download link
  a.href = imageURL;
  a.download = `${Date.now()}.png`;
  a.click();
};

// If your array contain text (emoji strings) ,, Download JSON File 

// const Download = (emojiList) => {
//   const blob = new Blob([JSON.stringify(emojiList, null, 2)],
//  { type: "application/json" });
//   const url = URL.createObjectURL(blob);

//   const a = document.createElement("a");
//   a.href = url;
//   a.download = `${Date.now()}.json`;
//   a.click();

//   URL.revokeObjectURL(url);
// };


  return (<>
    <div className="bg-indigo-300 min-h-screen">
      <div className="max-w-5xl mx-auto p-4">


        <div className="bg-indigo-100 rounded-lg shadow-md p-6 mt-6 flex flex-col items-center">



          <h1 className="text-3xl font-bold underline text-center p-4">
            Welcome to Emoji Finder Page
          </h1>
          <input onChange={serachEmoji} type="text" className="border p-2 rounded w-64 mx-auto" placeholder="Search Emoji Here" />
          <div>
            <h2 className="text-2xl font-semibold mt-4">Emoji Results:</h2>
            <div className="grid grid-cols-5 gap-4 p-4 mt-2">


              {emoji.map((item, index) => (
                <div key={index} className="bg-white p-2 rounded shadow-lg text-center cursor-pointer hover:bg-gray-200">

                  <span className="text-4xl">{item.emoji}</span>
                  <p className="mt-2 text-sm">{item.name}</p>


                  <button onClick={() => Download(item.emoji)} className='font-semibold mt-4 bg-gradient-to-l from-gray-300 to-pink-500 hover:scale-110 transition-transform duration-100 rounded '>
                    <i className="ri-swap-2-line font-semibold text-xl"></i>
                    Download
                  </button>


                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

    </div>

  </>
  );
};
export default App;



