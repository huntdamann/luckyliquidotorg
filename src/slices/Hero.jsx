import React, { useRef } from "react";
import BackgroundClover from "../components/ui/BackgroundClover";
import HeroPage from '../components/hero/HeroPage'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


const Hero = ({ refNo, setter }) => {

  const triggerRef = useRef(null);
  const canvasRef = useRef(null);
  const contentRef = useRef(null)

  useGSAP(() => {

    // Timeline that fades interactive gradient to background as user scrolls
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=500",      // scroll distance
        pin: true,
        scrub: 1,
      }
    });
    tl.to(canvasRef.current, {
      opacity: 0,      
    }, 0.3);
    tl.to(contentRef.current, {
      opacity: 0,
    }, 0.1);
    


   
  }, { scope: triggerRef });
 

  return (
    <section ref={triggerRef}>


      <BackgroundClover content={contentRef} gradient={canvasRef} open={refNo} setter={setter} >

      </BackgroundClover>

    </section>
    
   

  );
}

export default Hero;
