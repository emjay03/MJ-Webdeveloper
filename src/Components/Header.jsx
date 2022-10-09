import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll"

const Header = () =>  {
  const [nav, setNav] = useState(false);

  const [textColor] = useState("#ffff");

  const handleNav = () => setNav(!nav);

  return (
    <>
    <div
      id="home"
      className="  fixed left-0 top-0 w-[100%] z-20 transition duration-300 bg-color1  ">
       
      <div className="max-w-[1140px] m-auto flex justify-between items-center py-7 px-5 ">
        <Link to="home" offset={-7000} spy={true} smooth={true} duration={500}>
          <h1 className="text-3xl font-semibold text-color4 font-sans cursor-pointer">
            MJ Cariso
          </h1>
          <p className="text-xl font-archivo mt-[-9px] font-light text-color3 cursor-pointer">
            Web Developer
          </p>
        </Link>

        <ul className="hidden text-lg font-light  font-sans text-color4 gap-3 md:flex">
          <li className="p-4 cursor-pointer hover:text-color3 tracking-wider">
            <Link
              to="home"
              offset={-7000}
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
           <li className="p-4 cursor-pointer hover:text-color3">
            <Link
              to="about"
              offset={-100}
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
           <li className="p-4 cursor-pointer hover:text-color3">
            <Link
              to="Project"
              offset={-100}
              spy={true}
              smooth={true}
              duration={500}
            >
              Project
            </Link>
          </li>

           <li className="p-4 cursor-pointer hover:text-color3">
            <Link
              to="Testimonial"
              offset={-100}
              spy={true}
              smooth={true}
              duration={500}
            >
              Testimonial
            </Link>
          </li>
        </ul>
        <div className="hidden z-10 text-lg bg-color4 py-4 rounded-lg font-normal px-8 text-color1 font-libre cursor-pointer hover:bg-color3 duration delay-75 md:flex">
        <Link
                onClick={handleNav}
                to="Contact"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
              >  Contact
                </Link>
        
        </div>

        {/* Mobile Button */}
        <div onClick={handleNav} className="md:hidden z-10 cursor-pointer">
          {nav ? (
            <AiOutlineClose size={40} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={40} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "md:hidden absolute top-0 left-[140px] right-0 bottom-0 flex justify-center items-center text-center h-screen bg-color1 shadow-2xl transition duration-300 "
               :"md:hidden absolute top-0 left-[100%] right-0 bottom-0 w-[200px] h-screen transtion duration-300"
          }
        >
          <ul
            className={
              !nav
                ? "hidden "
                : " absolute w-full px-8 font-normal font-libre text-color4 opacity-90"
            }
          >
            <li className="p-4 ">
              <Link
                onClick={handleNav}
                className="text-xl cursor-pointer hover:text-color3"
                to="home"
                offset={-7000}
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="p-4">
              <Link
                onClick={handleNav}
                className="text-xl cursor-pointer hover:text-color3"
                to="about"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="p-4">
              <Link
                onClick={handleNav}
                className="text-xl cursor-pointer hover:text-color3"
                to="Project"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
              >
                Project
              </Link>
            </li>

            <li className="p-4 ">
              <Link
                onClick={handleNav}
                className="text-xl cursor-pointer hover:text-color3"
                to="Testimonial"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
              >
                Testimonial
              </Link>
            </li>
          
            <div className="flex justify-center p-4">
            <div className="flex z-10 bg-color4 py-4 rounded-lg font-normal px-8 text-color1 font-libre cursor-pointer hover:bg-color3 duration delay-75 ">
            <Link
                onClick={handleNav}
                to="Contact"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
              >
                  Contact
              </Link>
       
        </div>
        </div>
        
          </ul>
        </div>
      </div>
    </div>
   
    
  
</>
    
  );
}

export default Header;
