import React from "react";

const About = () => {
  return (
    <div className="bg-color7">
    <div id="about" className="max-w-[1140px] m-auto flex flex-col  ">
    
        <h1 className="text-6xl font-bold text-center font-archivo text-color4 mt-10">Know About Me</h1>
     
      <div className="flex justify-between gap-10 p-4 flex-col mt-20 mb-9 lg:flex-row ">
        <div className="flex flex-1 mb-9 justify-center z-0 md:mb-0">
       
            <img className="rounded-xl p-1  sm:w-[80%] md:w-[60%] lg:w-[100%] lg:h-[100%]  " src="/mj.svg" alt="mjcariso" />
            <img src='/assets/mj.svg' />
        </div>

        <div className="w-full flex flex-1 flex-col  text-center lg:text-left">
        
            <h2 className="text-color4 font-archivo  tracking-wider text-4xl font-normal mb-5">Who I am?</h2>
          
          <div className="py-2 ">
           
              <p className="font-archivo text-lg mb-6 tracking-wide text-color6 font-light">
                I am 2nd year College pursuing Bachelor's of Science in
                Information Technology am a young,{" "}
                <span className="border-b-2 border-color3">active and highly motivated programmer</span> who loves to
                work on challenging projects.{" "}
                <span className="border-b-2 border-color3">I have a strong technical background</span> I am a
                developer who is passionate about technology. I believe in
                creating products that are both customer-centric and
                cost-effective. And
                <span className="border-b-2 border-color3"> I always love a challenge!</span>
              </p>
           
              <p className="font-archivo text-lg mb-6 tracking-wide text-color6 font-light">
                I'm an aspiring web developer looking to develop my skills. I
                learn fast and I'm currently looking for the right opportunity
                to start working, learning and improving with great people.
              </p>
            
          </div>
        </div>
      </div>
      <div className="w-full text-center flex flex-wrap gap-[60px] mb-4 px-4 lg:gap-5">
      <div className="w-[460px]">
        <div className="mt-0 hb:mt-[4rem]">
          <h1 className="text-color4 font-light font-sans text-4xl text-left ">These are the tools I employ when working on projects</h1>
</div>
        </div>
        <div className=" w-full ss:w-full  hb:w-[600px] ">
          
            <h3 className="font-archivo font-light tracking-wider text-4xl mb-7 text-left text-color4">Tech Stacks</h3>
          <div className="flex justify-center items-center">
            <div className="  grid grid-cols-2 gap-9 bf:grid-cols-3 ss:grid-cols-6 hb:grid-cols-4 rt:grid-cols-6 cd:grid-cols-5 xr:grid-cols-4">
              <div className="w-[120px]  bg-color1 py-3 px-7 rounded-sm">
                <img src="./assets/tech/html.svg" width="72px" alt="html"/>
                <div className="flex border-2  justify-center">
                <p className="font-sans text-color4  font-medium w-auto">Html</p>
                </div>
              </div>

              <div className="w-[120px]  bg-color1 py-3 px-7 rounded-sm">
                <img src="./assets/tech/css.svg" width="72px"  alt="css" />
                <p className="font-sans text-color4  font-medium    ">Css</p>
              </div>
              <div className="w-[120px]  bg-color1 py-3 px-7 rounded-sm">
                <img src="./assets/tech/javascript.svg" width="72px" alt="js"/>
                <div className="flex border-2  justify-center">
                <p className="font-sans text-color4  font-medium  text-center 12">Javascript</p>
              </div>
              </div>
              <div className="w-[120px]  bg-color1 py-3 px-7 rounded-sm">
                <img src="./assets/tech/tailwind.svg" width="72px"  alt="tailwind"/>
                <p className="font-sans text-color4  font-medium">Tailwind</p>
              </div>
              <div className="w-[120px]  bg-color1 py-3 px-7 rounded-sm">
                <img src="./assets/tech/bootstrap.svg" width="72px"  alt="bs"/>
                <p className="font-sans text-color4  font-medium">Bootstrap</p>
              </div>
              <div className="w-[120px]  bg-color1 py-3 px-7 rounded-sm">
                <img src="./assets/tech/react.svg" width="72px" alt="react" />
                <p className="font-sans text-color4  font-medium">React</p>
              </div>
              <div className="w-[120px]  bg-color1 py-3 px-7 rounded-sm">
                <img src="./assets/tech/mysql.svg" width="72px" alt="mysql"/>
                <p className="font-sans text-color4  font-medium">Mysql</p>
              </div>
              <div className="w-[120px]  bg-color1 py-3 px-7 rounded-sm">
                <img src="./assets/tech/java.svg" width="72px"  alt="java" />
                <p className="font-sans text-color4  font-medium">Java</p>
              </div>
              <div className="w-[120px]  bg-color1 py-3 px-7 rounded-sm">
                <img src="./assets/tech/net.svg" width="72px" alt="net"/>
                <p className="font-sans text-color4  font-medium">.Net</p>
              </div>
              <div className="w-[120px]  bg-color1 py-3 px-7 rounded-sm">
                <img src="./assets/tech/nodejs.svg" width="72px" alt="node" />
                <p className="font-sans text-color4  font-medium">Nodejs</p>
              </div>
              <div className="w-[120px]  bg-color1 py-3 px-7 rounded-sm">
                <img src="./assets/tech/Figma.svg" width="72px" alt="figma" />
                <p className="font-sans text-color4  font-medium">Figma</p>
              </div>
              <div className="w-[120px]  bg-color1 py-3 px-7 rounded-sm">
                <img src="./assets/tech/linux.svg" width="72px"  alt="linux"/>
                <p className="font-sans text-color4  font-medium">Linux</p>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
    </div>
  );
};

export default About;
