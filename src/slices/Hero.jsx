import React, {  } from "react";
import BackgroundClover from "../components/ui/BackgroundClover";
import HeroPage from '../components/hero/HeroPage'
const Hero = ({ refNo, setter }) => {

 

  return (
    <section>


      <BackgroundClover open={refNo} setter={setter} >

      </BackgroundClover>

    </section>
    
   

  );
}

export default Hero;
