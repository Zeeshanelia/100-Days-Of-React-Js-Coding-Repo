import { useEffect, useState } from 'react'
import "animate.css";


function App() {
  const [Jokes, setJokes] = useState({});
  const [show, setShow] = useState(true);

  const fetchJokes = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJokes(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-black to-red-200 text-white flex flex-col items-center justify-center">

        <div className=" max-w-9xl bg-white mx-auto text-center  rounded-lg shadow-lg p-10          space-y-1 
        animate__animated animate__bounce">

          <h1 className="text-2xl font-bold text-black"> Random Jokes Generator 🤪 </h1>

          {
            Jokes.type === "general" ? (
              <p className="text-sm text-green-600 font-semibold"> Category: General </p>
            ) : Jokes.type === "programming" ? (
              <p className="text-sm text-blue-600 font-semibold"> Category: Programming </p>
            ) : Jokes.type === "knock-knock" ? (
              <p className="text-sm text-purple-600 font-semibold"> Category: Knock-Knock </p>
            ) : null
          }



          <p className="text-lg text-pink-900">{Jokes.setup}</p>

          {show ? (
            <button onClick={() => setShow(false)} className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
              Reveal Setup
            </button>
          ) : (
            <>
              <p className="text-lg text-gray-800">{Jokes.punchline}</p>
              <button onClick={() => setShow(true)} className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                Hide Punchline
              </button>
            </>
          )}


          <button onClick={fetchJokes} className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Next Joke
          </button>

          <p className='text-black'> Joke Number is :  {Jokes.id} </p>
        </div>
      </div>

    </>
  )
}

export default App




