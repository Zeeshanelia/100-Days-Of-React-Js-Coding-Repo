
import "animate.css";
import CriptoTrack from './component/CriptoTrack';


function App() {



  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white flex flex-col items-center justify-center">

        <div className="  bg-white mx-auto text-center  rounded-lg shadow-lg p-5 space-y-2 animate__animated animate__bounce">

         
          <CriptoTrack />
        </div>
      </div>

    </>
  )
}

export default App




 