import {  useEffect } from "react";
import {  getData } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react';
import Category from '../component/Category'

const Carousel = () => {
    const { data, fetchAllData } = getData();


    // Custom Arrow components for Slick
    const NextArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 right-4 z-20 cursor-pointer text-white text-2xl
            transform -translate-y-1/2"  onClick={onClick}>
            <ArrowBigRightDash />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 left-4 z-20 cursor-pointer text-white text-5xl
            transform -translate-y-1/2"   onClick={onClick}>
            <ArrowBigLeftDash />
        </div>
    );


    var settings = {
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        dots:false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 6000,
        pauseOnHover: false,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        fetchAllData();
    }, []);


    return (
        <div className="overflow-hidden pb-3 bg-gradient-to-br from-pink-200 via-gray-100 to-yellow-200">
            <Slider {...settings} >
                {data?.slice(0, 7)?.map((items, index) => (
                    <div key={index} className="bg-gradient-to-l from-blue-300 to-purple-800 shadow-xl ">
                        <div className="max-w-6xl mx-auto md:px-10 px-2">
                            <div className="flex  md:flex-row md:items-center md:justify-between gap-10 h-[150px] md:h-[320px]">


                                <div className="space-y-1 md:space-y-3 md:w-1/2 text-center md:text-left ml-10">
                                    <h3 className="mt-2 text-rose-500 font-bold underline text-sm">
                                        {items.category}
                                    </h3>

                                    <h1 className="text-white md:text-3xl md:font-bold uppercase">
                                        {items.title}
                                    </h1>

                                    <p className="text-gray-200 md:block hidden">
                                        {items.description.slice(0, 100)}
                                    </p>

                                    <button className="px-4 py-2 bg-gradient-to-t from-yellow-300 to-zinc-300 hover:shadow-lg">
                                        Shop Now
                                    </button>
                                </div>

                                {/* Image Section */}
                                <div className="md:w-1/2 flex justify-center mt-2 ">
                                    <img
                                        src={items.image}
                                        alt="image" className="md:w-66 md:h-66 w-34 h-34 lg:object-contain md:rounded" />
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </Slider >

            <div>
                <Category/>
            </div>
        </div>

    );
};

export default Carousel;

