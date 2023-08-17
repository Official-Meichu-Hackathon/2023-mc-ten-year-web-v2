//slides
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/image';
import "./local.scss";
import "../../globals.scss"
import leftArrow from "../../../../public/img/Team/menu-left.svg";
import rightArrow from "../../../../public/img/Team/menu-right.svg";
import rectangle from "../../../../public/img/Team/Rectangle.svg";
import dot from "../../../../public/img/Team/dot.svg"
import fullscreen from "../../../../public/img/Team/fullscreen.svg"
import teamphoto from "../../../../public/img/Team/teamphoto.png"

export function ImageSlider({closePopup, openPopup}) {
  const slides = [
    {
      path: teamphoto,
    },
    {
      path: teamphoto,
    },
    {
      path: teamphoto,
    },

    {
      path: teamphoto,
    },
    {
      path: teamphoto,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='  h-full w-full  absolute group'>
      <Image src={slides[currentIndex].path} 
             alt="msg Icon" 
             className="h-full w-full object-cover"
              />
    
      {/*pop up button for viewing picture*/}

      <div className='h-[10rem] w-[14rem] absolute  z-100 bottom-0 right-0'>

        <div className='h-full w-1/3 absolute flex justify-center  '> 
          <button onClick={()=>{openPopup()}}  className='absolute bottom-1/6'>
                <Image src={dot} alt="dot" className=" h-full w-full  "/>
          </button>
          <button onClick={()=>{openPopup()}} className='absolute bottom-[2.1rem]' >
                <Image src={fullscreen} alt="fullscreen" className="h-full w-full"/>
          </button>
        </div>

        <div className='h-full w-2/3 absolute flex justify-center right-0 '> 

          {/* Oval Background */}
          <div className='absolute  bottom-1/6'>
            <Image src={rectangle} alt="Background"/>
          </div>

          {/* Current Slide Index */}
          <div className='absolute bottom-[1.82rem] left-1/2 transform -translate-x-1/2 text-lg'>
              {currentIndex + 1} 
          </div>
          {/* Left Arrow */}
          <button className='absolute bottom-[1.95rem] left-[2.4rem]'
                  onClick={prevSlide}>
              <Image src={leftArrow} alt="msg Icon" width={23.83} height={23} />
          </button>

          {/* Right Arrow */}
          <div className='absolute bottom-[1.95rem] right-[2.4rem]'
              onClick={nextSlide}>
              <Image src={rightArrow} alt="msg Icon" width={23.83} height={23} />
          </div>
        </div>


      </div>



    </div>
  );
}


