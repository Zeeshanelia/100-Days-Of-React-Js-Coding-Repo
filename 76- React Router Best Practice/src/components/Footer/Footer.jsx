import { Link } from 'react-router-dom';
// import { Outlet } from 'react-router-dom'
// import Navbar from './Navbar'

export default function Footer() {
    return (
        <footer className="bg-white border-y">

                {/* <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" /> */}

                <div className="min-h-screen bg-gray-50 flex flex-col">
                    {/* <Navbar /> */}
                    <main className=" max-w-7xl mx-auto px-4 py-8 w-full">
                        {/* <Outlet /> Child routes render here */}
                    </main>
                    <footer className="bg-gray-800 text-white text-center py-4">
                        <p>React Router DOM Learning - Dynamic Routes & Parameters</p>
                    </footer>
                </div>





        </footer>
    );
}