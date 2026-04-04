import React from "react";
import img1 from "../../public/img1.jpg";
import img2 from "../../public/img2.jpg";
import img3 from "../../public/img3.webp";
import reactjs from "../../public/reactjs.png";

function PortFolio() {
  const cardItem = [
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      SourceCode: "https://github.com/Zeeshanelia/Context-Api-With-Simple-Approach"
    },
    {
      id: 4,
      logo: img2,
      name: "React Firebase",
      SourceCode: "https://github.com/Zeeshanelia/Ecommerce-Store-ReactVite"
    },
    {
      id: 2,
      logo: img3,
      name: "Html Css3 Js ",
      SourceCode: "https://github.com/Zeeshanelia/Portfolio_Website"
    },
    {
      id: 1,
      logo: img1,
      name: "WordPress",
      SourceCode: "https://github.com/Zeeshanelia/AddToCart-Bootstrap-React-Vite"
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-2">PortFolio</h1>
        <span className="font-semibold mt-8 mx-5 ">Here Featured Some Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 md:ml-4 gap-9 my-5">
          {cardItem.map(({ id, logo, name, SourceCode }) => (
            <div className="md:w-[300px] md:h-[358px] border-[2px] rounded-lg inset-shadow-sm inset-shadow-indigo-500  cursor-pointer hover:scale-110 md:hover:scale-150 duration-200"
              key={id}>


              <img src={logo} className="mx-auto w-[150px] h-[150px] p-1 rounded-full border-[1px]" alt="" />


              <div>
                <div className="px-4 font-bold text-medium mb-2">{name}</div>
                <p className="px-1 text-gray-900">
                quo molestiae temporibus delectus. alias repudiandae error quod quis, distinctio expedita autem rerum quo molestiae temporibus delectus.
                </p>
              </div>


              <div className="px-6 py-1 space-x-3 justify-around">

                <button className="bg-slate-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Demo
                </button>
                <a
                  href={SourceCode} target="_blank" rel="noopener noreferrer"
                >
                  <button className="bg-orange-400 hover:bg-green-800 text-white font-bold px-4 py-2 rounded">
                    View Source
                  </button>



                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
