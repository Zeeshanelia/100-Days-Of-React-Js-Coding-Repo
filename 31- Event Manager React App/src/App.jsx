import { useState } from 'react'
import "animate.css";
import EventDetails from './page/EventDetails.jsx';
import EventList from './page/EventList.jsx';
import FilterEvent from './page/FilterEvent.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [errors, setErrors] = useState({});


  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-l from-gray-800 to-yellow-500 text-white flex items-center">
          <div className="max-w-9xl bg-white mx-auto text-center rounded-lg shadow-lg space-y-1 animate__animated animate__bounce">

            <Routes>
              <Route path="/" element={<EventList />} />
              <Route path="/event-details" element={<EventDetails />} />
              <Route path="/event-filter" element={<FilterEvent />} />
              

              <Route path="*" element={<h1 className="text-black">404 Not Found</h1>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App





