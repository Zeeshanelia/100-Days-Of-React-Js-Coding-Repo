import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import recatjs from "../../public/reactjs.png";
import javascript from "../../public/javascript.png";

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: recatjs,
      name: "React Js ",
    },
    {
      id: 2,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 3,
      logo: css,
      name: "Css3 ",
    },
    
    
    {
      id: 4,
      logo: html,
      name: "Html5",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 1 year plus of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-20 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[250px] md:h-[250px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300 gap-3"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
