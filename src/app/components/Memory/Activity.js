import Image from "next/image";
import rightArrow from "../../../../public/img/activity_rightArrow.svg";
import leftArrow from "../../../../public/img/activity_leftArrow.svg";
import React from "react";
import Slider from "react-slick";
import { useRef, useState, useEffect } from "react";
import useRWD from "./useRWD";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";

function ActivitySecH({content, img, slider}) {
    return (
        <div className="flex justify-between md:h-[27vw] md:pt-0 xl:pt-[4vw] md:px-[7vw] xl:px-[10vw] md:items-center xl:items-start">
            <div className="flex flex-col justify-between md:h-[20vw] xl:h-[17vw] xl:pd-[5vw]">
                <div className="w-5/6 md:leading-6 lg:leading-7">{content}</div>
                <div>
                    <div className="flex justify-between w-20">
                        <button onClick={()=>slider?.current?.slickPrev()}><Image src={leftArrow} alt="left arrow"/></button>
                        <button onClick={()=>slider?.current?.slickNext()}><Image src={rightArrow} alt="right arrow"/></button>
                    </div>
                </div>
            </div>
            <div className="h-auto w-[100vw] float-right"><Image src={img} alt="acvitity photo"/></div>
        </div>
    )
}

function ActivitySecV({content, img}) {
    return (
        <div className="">
            <div className="">
                <Image className="w-full" src={img} alt="acvitity photo"/>
            </div>
            <div className="flex justify-center">
                <p className="pt-[1.8125rem] px-[1.5625rem] text-xs/5 sm:text-base/8 pd-[2rem] font-thin">{content}</p>
            </div>
        </div>
    )
}

// posts: an arry which element contains content and image [{"content": "123", "img": photo}, {"content": "456", "img": photo}, ...]
export default function Activity({posts}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    const settingsM = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: "button__bar"
    }
    
    const slider = useRef(null);
    const RWD = useRWD();
    
    return (
        <section className="bg-[#464A53] text-[#FFFFFF] mx-[-34px] sm:mx-[-48px] h-auto md:h-[27vw] xl:h-[25vw] overflow-visible">
            { RWD >= 2 && 
                <Slider ref={slider} {...settings}>
                    {posts.map(post => (
                        <div key={post.id}>
                            <ActivitySecH content={post.content} img={post.img} slider={slider}/>
                        </div>
                    ))}
                </Slider>
            }
            {/* mobile mode */}
            { RWD < 2 && 
                <Slider ref={slider} {...settingsM}>
                    {posts.map(post => (
                        <div key={post.id}>
                            <ActivitySecV content={post.content} img={post.img}/>
                        </div>
                    ))}
                </Slider>
            }
        </section>
    )
    
}

/*

*/