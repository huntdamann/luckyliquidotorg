import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaClover } from "react-icons/fa6";

import '../css/embla.css'
import '../css/base.css'



export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
  useDotButton(emblaApi)

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
        {/* <div className='relative flex mt-8 min-h-[3rem] justify-evenly'>

          <button
            onClick={scrollPrev}
            className="text-white h-10 rounded-md bg-[#51B150] p-2 shadow-[4px_0_0_rgba(128,128,128,0.5)] 
                      transition-all duration-150 active:scale-95 active:bg-[#46A247]"
          >
           <FaArrowLeft className="relative z-40" />
          </button>



                <button
                onClick={scrollNext}
                 className="text-white h-10 rounded-md bg-[#51B150] p-2 shadow-[-4px_0_0_rgba(128,128,128,0.5)] 
                      transition-all duration-150 active:scale-95 active:bg-[#46A247]" >
                    <FaArrowRight className='relative z-40' />

                </button>
        </div> */}
        <div className="embla__controls">
        
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
       
    </div>
  )
}
