import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, } from "swiper";

const Testimonial=()=> {
  
  return (
    <div id="Testimonial" className="max-w-[1140px] m-auto p-4 ">
    
    <h1 className="text-6xl font-bold text-right font-archivo text-color4 mt-10 gm:text-center">Testimonial</h1>
 
   <div className="flex justify-end items-end mt-4 ">
     <p className="font-archivo text-right text-color6 w-full text-2xl gm:text-center">What Other says about me</p>
   </div>
 
   
   <Swiper  
   
     spaceBetween={30}
     centeredSlides={true}
     autoplay={{
       delay: 4000,
       disableOnInteraction: false,
     }}
     pagination={{
       clickable: true,
     }}
     navigation={false}
     modules={[Pagination,Autoplay]}
     className="mySwiper "
   >
     <SwiperSlide>
       <section className="w-full flex justify-center items-center mt-7 ">
         <div className="max-w-[1024px] p-4 mb-6">
           <div className="h-3 text-3xl text-left text-color4 mb-2">“</div>
           <p className="px-4 text-center text-color6 text-2xl font-sans italic font-normal">
             Mr. Mark James Cariso is a kind and sincere IT Student. He loves
             learning, and he shows me projects he has done for the past many
             years. He is always willing to help and teach others, whether they be students 
             or not. He is a very knowledgeable person.
           </p>
           <div className="h-3 text-3xl text-right text-color4 mb-2 ">”</div>

           <h5 className="text-center font-sans font-normal text-2xl text-color4">Mr.Alex Bargabino</h5>
           <h4 className="text-xl font-sans font-normal text-center text-color4">IT-Student</h4>
         </div>
       </section>
     </SwiperSlide>

     <SwiperSlide>
     <section className="w-full flex justify-center items-center mt-7 ">
         <div className="max-w-[1024px] p-4 mb-6">
           <div className="h-3 text-3xl text-left text-color4 mb-2">“</div>
           <p className="px-4 text-center text-color6 text-2xl font-sans italic font-normal">
           Mr. Mark James Cariso is a good analytical thinker when it comes
                to creating a project. He has a certain knowledge and experience
                that helps him throughout the creation, because he is
                knowledgeable and experienced in various things
           </p>
           <div className="h-3 text-3xl text-right text-color4 mb-2 ">”</div>

           <h5 className="text-center font-sans font-normal text-2xl text-color4">Ms. Trisha Burce</h5>
           <h4 className="text-xl font-sans font-normal text-center text-color4">IT-Student</h4>
         </div>
       </section>
     </SwiperSlide>

     <SwiperSlide>
     <section className="w-full flex justify-center items-center mt-7 ">
         <div className="max-w-[1024px] p-4 mb-6">
           <div className="h-3 text-3xl text-left text-color4 mb-2">“</div>
           <p className="px-4 text-center text-color6 text-2xl font-sans italic font-normal">
           I love his works and creativity, he truly has the talent to make
                something different for each of his projects and designs. He puts his own unique twist on every single
                 project/design that he creates. Which makes them unique and special in their own way
           </p>
           <div className="h-3 text-3xl text-right text-color4 mb-2 ">”</div>

           <h5 className="text-center font-sans font-normal text-2xl text-color4">Mr. Angelo Ordonio</h5>
           <h4 className="text-xl font-sans font-normal text-center text-color4">COMSCI Student</h4>
         </div>
       </section>
     </SwiperSlide>

     <SwiperSlide>
     <section className="w-full flex justify-center items-center mt-7 ">
         <div className="max-w-[1024px] p-4 mb-6">
           <div className="h-3 text-3xl text-left text-color4 mb-2">“</div>
           <p className="px-4 text-center text-color6 text-2xl font-sans italic font-normal">
           As a former group member of Mr. Mark James Cariso, i can say
                that he is the type of group member who is hardworking, prompt,
                open to criticism smart when it comes to programming and
                extremely depensable. His works are all of excellent quality and
                incredibly valuable.
           </p>
           <div className="h-3 text-3xl text-right text-color4 mb-2 ">”</div>

           <h5 className="text-center font-sans font-normal text-2xl text-color4">Mr/Ms. Christian Santiago</h5>
           <h4 className="text-xl font-sans font-normal text-center text-color4">IT Student</h4>
         </div>
       </section>
     </SwiperSlide>
     <SwiperSlide>
     <section className="w-full flex justify-center items-center mt-7 ">
         <div className="max-w-[1024px] p-4 mb-6">
           <div className="h-3 text-3xl text-left text-color4 mb-2">“</div>
           <p className="px-4 text-center text-color6 text-2xl font-sans italic font-normal">
           MJ is the programmer in the group and he leads us to be better
                and he always helps us because we can't keep up. MJ is a good
                leader for me because from the beginning he already knew the
                goal that we should pursue as a group and he was not lacking in
                that.
           </p>
           <div className="h-3 text-3xl text-right text-color4 mb-2 ">”</div>

           <h5 className="text-center font-sans font-normal text-2xl text-color4">Ms. Kathleen Morales</h5>
           <h4 className="text-xl font-sans font-normal text-center text-color4">IT Student</h4>
         </div>
       </section>
     </SwiperSlide>
   </Swiper>
   
 </div>
  )
}

export default Testimonial