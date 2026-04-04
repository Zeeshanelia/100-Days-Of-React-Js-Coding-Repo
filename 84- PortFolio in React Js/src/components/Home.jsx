import pic from "../../public/reactjs.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (<>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-[4rem]">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-14 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Portfolio</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">


              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}

                    <ReactTyped
                      className="text-red-700 font-bold"
                      strings={["Developer", "Programmer", "Coder"]}
                      typeSpeed={40}
                      backSpeed={50}
                      loop={true}
                    />

            </div>

            <br />
            <p className="text-sm md:text-md text-justify">
            I am passionate about designing modern experiences that are both visually stunning and intuitive, and always strive to create Web App that delight and engage users. I am a Front End Developer with a strong background in HTML, CSS, JavaScript, and React. I am also familiar with Firebase. I am currently working on a project that uses React, Tailwind CSS, and JavaScript. I am always eager to learn new technologies and improve my skills. I am looking for a challenging position where I can use my skills to create innovative and engaging Web App.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 ">
              <div className=" space-y-2">

                <h1 className="font-bold text-center">Follow me on</h1>

                <ul className="flex space-x-5">

                <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>


              <div className="space-y-2 ">

                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex items-cente justify-evenly gap-2 space-x-5">

                <BiLogoTailwindCss className="text-2xl md:text-3xl hover:scale-150 duration-200 rounded-full border-[2px] cursor-pointer" />
                < FaJs className="text-2xl md:text-3xl hover:scale-150 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-150 duration-200 rounded-full border-[2px] cursor-pointer" />
                  {/* <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" /> */}

                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-12 mt-2 order-1">
            <img
              src={pic}
              className="rounded md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr  />

    </>
  );
}

export default Home;
