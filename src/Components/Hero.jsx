import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

import { SocialIcon } from 'react-social-icons';
function Hero() {
  return (
    <div className="   bg-no-repeat  h-[620px] bg-color1">
    <div className="max-w-[1140px] m-auto flex justify-center items-center text-center p-4 mt-[110px] mb-9">
      <div className="w-full flex flex-col justify-center text-center font-archivo text-color4 p-14 py-20 fd:px-0 ">
        <h1 className="py-4 md:text-4xl text-3xl font-normal">Hello, I am</h1>
        <h3 className="md:text-6xl text-5xl  gf:text-4xl font-bold text-color4">
          <Typewriter
            className="type"
            options={{
              autoStart: true,
              loop: true,
              deleteSpeed: false,
              onLoopDone: 1,

              strings: ["Mark James Cariso"],
            }}
          />
        </h3>

        <p className="text-xl   font-sans font-normal text-color6 py-4">
          Are you looking for a web front end developer for your next project?
          Do you want to build something incredible? Then I am the right Web
          Developer for you.
        </p>
        <div className="flex gap-3 mb-5 py-2 justify-center ">
         
          <SocialIcon url="https://www.facebook.com/mjcariso03" network="facebook" bgColor="#d9d9d9" style={{ height: 40, width: 40 }} className="h-8 relative transition duration-150 cursor-pointer hover:bottom-2" />
         
        
          <SocialIcon network="github" bgColor="#e6e6e6" style={{ height: 40, width: 40 }} className="h-8 relative transition duration-150 cursor-pointer hover:bottom-2"/>
        
          <SocialIcon url="https://twitter.com/" network="twitter" bgColor="#e6e6e6" style={{ height: 40, width: 40 }} className="h-8 relative transition duration-150 cursor-pointer hover:bottom-2"/>
          <SocialIcon url="https://www.tiktok.com/@emj4yit?lang=en" network="tiktok" bgColor="#e6e6e6" style={{ height: 40, width: 40 }} className="h-8 relative transition duration-150 cursor-pointer hover:bottom-2"/>
          <SocialIcon  url="https://www.linkedin.com/in/mj-cariso-81b659214/" network="linkedin" bgColor="#e6e6e6" style={{ height: 40, width: 40 }} className="h-8 relative transition duration-150 cursor-pointer hover:bottom-2"/>
        </div>

        <Link
          to="Project"
          offset={-100}
          spy={true}
          smooth={true}
          duration={500}
        >
          <button className="bg-color3 text-md text-color1   font-archivo py-5 px-10 rounded-lg font-semibold transition durtaion-200 hover:text-color1 hover:bg-color4 ">EXPLORE PROJECT</button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Hero;
