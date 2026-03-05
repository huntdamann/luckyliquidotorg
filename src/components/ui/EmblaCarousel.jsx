import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Image from "next/image";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaClover } from "react-icons/fa6";

import '../../css/embla.css'
import '../../css/base.css'



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

                <Image width={200} height={200} src='/assets/lucky_tee_1.png'  alt='Lucky T-shirt Design 1'/>

            </div>
            
          </div>
          <div className="embla__slide">
            <div className='embla__slide__number'>

             <Image width={150} height={150} src='/assets/lucky_tee_2.png'  alt='Lucky T-shirt Design 2'/>


            </div>
            
          </div>
          <div className="embla__slide">
            <div className='embla__slide__number'>

            <Image width={200} height={200} src='/assets/lucky-logo-demo.png'  alt='Lucky T-shirt Design 2'/>


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
