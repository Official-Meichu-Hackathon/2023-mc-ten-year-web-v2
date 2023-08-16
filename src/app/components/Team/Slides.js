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

export function ImageSlider({closePopup, openPopup}) {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://imgur.com/a/nmYjvjK',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
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
    <div className='h-[24.75rem] w-[44rem] m-auto py-2 mr-[2rem] relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className=' h-full w-full bg-center bg-cover duration-500'
      ></div>
      {/*pop up button for viewing picture*/}

      <button onClick={()=>{openPopup()}} className='absolute bottom-[0.7rem] right-[10rem] transform   text-black'>
            <Image src={dot} alt="dot" className="centered-image "/>
      </button>

      <button onClick={()=>{openPopup()}} className='absolute bottom-[1.47rem] right-[10.52rem] transform   text-black' >

            <Image src={fullscreen} alt="fullscreen" className="centered-image"/>
      </button>

      {/* Oval Background */}
      <div className='absolute bottom-0 right-[0rem] transform -translate-x-1/2 w-24 h-12  rounded-full'>
        <Image src={rectangle} alt="Background"/>
      </div>

      {/* Current Slide Index */}
      <div className='absolute bottom-[1.18rem] right-[5.58rem] transform   text-black'>
          {currentIndex + 1} 
      </div>
      {/* Left Arrow */}
      <button className='absolute bottom-[0.94rem] right-[6.2rem] text-2xl rounded-full p-2 text-white cursor-pointer'
              onClick={prevSlide}>
          <Image src={leftArrow} alt="msg Icon" width={20.83} height={16.67} />
      </button>

      {/* Right Arrow */}
      <div className='absolute bottom-[0.94rem] right-[3.4rem] text-2xl rounded-full p-2  text-white cursor-pointer'
          onClick={nextSlide}>
          <Image src={rightArrow} alt="msg Icon" width={20.83} height={16.67} />
      </div>



    </div>
  );
}


