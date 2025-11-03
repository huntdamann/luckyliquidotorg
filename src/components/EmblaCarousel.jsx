import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaClover } from "react-icons/fa6";

import '../css/embla.css'
import '../css/base.css'



export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className='embla__slide__number'>

                1

            </div>
            
          </div>
          <div className="embla__slide">
            <div className='embla__slide__number'>

                2

            </div>
            
          </div>
          <div className="embla__slide">
            <div className='embla__slide__number'>

                3

            </div>
            
          </div>
          
        </div>
      </div>


        {/* Button Controls */}
        <div className='relative flex mt-8 min-h-[3rem] justify-evenly'>

               
                <button className="text-white relative" onClick={scrollPrev}>
                    <FaArrowLeft className='relative z-40' />
                    <FaClover className='text-green-500 absolute top-0 left-[-1rem] text-5xl' />

                </button>


                <button className="text-white relative" onClick={scrollNext}>
                    <FaArrowRight className='relative z-40' />
                    <FaClover className='text-green-500 absolute top-0 right-[-1rem] text-5xl' />

                </button>
        </div>
       
    </div>
  )
}
