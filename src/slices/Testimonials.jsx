
import React, { useRef, memo } from "react";
import Image from "next/image";
import Testimonials1 from '../../public/assets/Testimonial-removebg-preview.png'
import Testimonials2 from '../../public/assets/Testimonial_2-removebg-preview.png'
import EmblaCarousel from '../components/ui/EmblaCarousel';


const Testimonials = React.memo(function Testimonials() {

    

  return (
    <>

     {/* Testimonials */}
     <section className="min-h-screen bg-[#d1a054] flex flex-col items-center justify-center py-16 px-4">
     <div className="flex flex-col items-center gap-6 mb-8">
       <Image
         priority
         alt="Testimonial Section"
         width={250}
         src={Testimonials1}
         className="rounded-lg object-contain"
       />
       <Image
         priority
         alt="Lucky Liquid Leprechaun Logo"
         width={250}
         src={Testimonials2}
         className="rounded-lg object-contain"
       />
     </div>

     {/* Carousel Section */}
     <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
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
