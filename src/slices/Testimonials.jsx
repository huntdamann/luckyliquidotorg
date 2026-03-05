
import React, { useRef, memo } from "react";
import Image from "next/image";
import EmblaCarousel from '../components/ui/EmblaCarousel';


const Testimonials = React.memo(function Testimonials() {

    

  return (
    <>

     {/* Testimonials */}
     <section  className="bg-[#d1a054] flex flex-col min-w-screen items-center justify-center">
     

     {/* Carousel Section */}
     <div className="relative border mx-auto overflow-hidden">
       {/* Left Blur Overlay */}
       {/* <div className="hidden md:block absolute left-0 top-0 h-full w-20 pointer-events-none z-10 bg-white/10 backdrop-blur-sm" /> */}

       {/* Right Blur Overlay */}
       {/* <div className="hidden md:block absolute right-0 top-0 h-full w-20 pointer-events-none z-10 bg-white/10 backdrop-blur-sm" /> */}

       <EmblaCarousel />
     </div>
     <a className="text-white mt-8 p-2 border-2 border-gray-400 bg-[#51B150] active:bg-green-500 active:scale-95 focus:bg-green-900 rounded-md min-w-24" id="button-handle" href="">shop now</a>


   </section>

   </>
    
  );
});

export default Testimonials;
