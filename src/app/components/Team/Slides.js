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

export function ImageSlider({ closePopup, openPopup }) {
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
    <div className="md:px-16 px-8 py-12 pb-6 md:flex md:space-x-32 items-start">
      <p className="hidden md:block text-sec-title md:mr-8 whitespace-nowrap">隊伍簡報</p>
      <div className='relative h-full w-full pt-3'>
        <Image src={slides[currentIndex].path}
          alt="msg Icon"
          className="h-full w-full object-cover"
        />

        {/*pop up button for viewing picture*/}

        <div className='absolute bottom-0 right-0 z-100 flex items-end space-y-2 mb-6 mr-6 space-x-4'>

          <div className='bg-white border border-black rounded-full flex justify-center h-[2.2rem] w-[2.2rem] items-center cursor-pointer'>
            <button onClick={() => { openPopup() }} className='' >
              <Image src={fullscreen} alt="fullscreen" className="" />
            </button>
          </div>

          <div className="bg-white border border-black rounded-[4rem] h-[2.2rem] aspect-1/3 flex items-center justify-center p-2 space-x-2">
            {/* Left Arrow */}
            <button className='cursor-pointer'
              onClick={prevSlide}>
              <Image src={leftArrow} alt="msg Icon" width={23.83} height={23} />
            </button>

            {/* Current Slide Index */}
            <div className='text-lg font-bold flex-shrink-0 w-[1rem] text-center'>
              {currentIndex + 1}
            </div>

            {/* Right Arrow */}
            <div className='cursor-pointer'
              onClick={nextSlide}>
              <Image src={rightArrow} alt="msg Icon" width={23.83} height={23} />
            </div>
          </div>

        </div>
      </div>

    </div>

  );
}


