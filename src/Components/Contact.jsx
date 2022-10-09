import React from "react";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="max-w-[1140px] m-auto justify-between text-center p-4 mt-7"
    >
      <h1 className="text-6xl font-bold text-center font-archivo text-color4 mt-10">
        Contact
      </h1>

      <div className="flex justify-center mt-4 ">
        <p className="w-[80%]  font-sans text-color6 text-xl ">
          Please do not hesitate to contact me. I am always interested in
          talking about new initiatives, original concepts, or chances to
          participate in your visions.
        </p>
      </div>

     

      <button className="bg-color3 mt-7 text-md text-color1   font-archivo py-5 px-10 rounded-lg font-semibold transition durtaion-200 hover:text-color1 hover:bg-color4">
        <a href="mailto:carisomarkjames22@gmail.com">Get in Touch</a>
      </button>
    </div>
  );
};

export default Contact;
