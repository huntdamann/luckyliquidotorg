
import React, { useRef, memo } from "react";
import Image from "next/image";
import Testimonials1 from '../../public/assets/Testimonial-removebg-preview.png'
import Testimonials2 from '../../public/assets/Testimonial_2-removebg-preview.png'
import EmblaCarousel from '../components/ui/EmblaCarousel';


const Testimonials = React.memo(function Testimonials() {

    

  return (
    <>

     {/* Testimonials */}
     <section style={{border: "1px red solid"}} className="bg-[#d1a054] flex flex-col min-w-screen items-center justify-center">
     

     {/* Carousel Section */}
     <div className="relative border mx-auto overflow-hidden">
       {/* Left Blur Overlay */}
       <div className="hidden md:block absolute left-0 top-0 h-full w-20 pointer-events-none z-10 bg-white/10 backdrop-blur-sm" />

       {/* Right Blur Overlay */}
       <div className="hidden md:block absolute right-0 top-0 h-full w-20 pointer-events-none z-10 bg-white/10 backdrop-blur-sm" />

       <EmblaCarousel />
     </div>


   </section>

   </>
    
  );
});

export default Testimonials;
