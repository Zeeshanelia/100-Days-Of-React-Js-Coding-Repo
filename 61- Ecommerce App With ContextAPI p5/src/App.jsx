import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Product from "./page/Product";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
// import { getData } from "./context/DataContext";
const apiKey = import.meta.env.VITE_GEOAPIFY_KEY;

function App() {
  //  const { fetchAllData } = getData();
  const [location, setLocation] = useState(null);
  const [dropDown, setDropDown] = useState(false)


  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`;

        try {
          const res = await axios.get(url);


          if (res.data?.features?.length > 0) {
            const properties = res.data.features[0].properties;

            setLocation({
              country: properties.country,
              state: properties.state,
              city: properties.city || properties.town ,
            });
            setDropDown(false)
          }
        } catch (error) {
          console.error("Geoapify Error:", error);
        }
      },
      (error) => {
        console.error("Geolocation Error:", error);
      }
    );
  };

  useEffect(() => {
    // fetchAllData();
    getLocation();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-gradient-to-br from-pink-200 via-gray-100 to-yellow-200 flex flex-col">

        <Navbar location={location} getLocation={getLocation} dropDown={dropDown} setDropDown={setDropDown}/>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          <Route
            path="*"
            element={
              <div className="h-[60vh] flex items-center justify-center">
                <h1 className="text-3xl font-bold text-red-400">
                  404 - Error
                </h1>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;