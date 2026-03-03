// import banner from '../images/banner.jpg'

const Banner = () => {
  const banner = '/images/banner.jpg'


  return (
    <>
      <div className="bg-gray-100 ">

        <div
          className="relative max-w-7xl mx-auto  pt-18 bg-cover bg-center  h-[350px] md:h-[600px]"
          style={{ backgroundImage: `url(${banner})`, backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>

          <div className="absolute inset-0 bg-black/60  bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Next-Gen Electronics at Your Fingertips</h1>
              <p className="text-lg md:text-xl mb-6">Discover the latest tech innovations with unbeatable prices and free shipping on all orders.</p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition hover:scale-105 duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
