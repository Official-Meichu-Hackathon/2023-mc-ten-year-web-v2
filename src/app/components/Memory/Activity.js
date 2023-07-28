import Image from "next/image";
import GroupPhoto_2022 from "../../../../public/img/activity_groupPhoto_2022.svg";
import rightArrow from "../../../../public/img/activity_rightArrow.svg";
import leftArrow from "../../../../public/img/activity_leftArrow.svg";
import Slider from "react-slick";
import { useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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

function ActivitySecV({content, img, slider}) {
    return (
        <div className="w-full my-[6vw]">
            <div className="flex justify-center">
                <div className="flex justify center w-auto"><Image className="w-[80vw]" src={img} alt="acvitity photo"/></div>
            </div>
            <div className="flex justify-center">
                <p className="pt-[4vw] w-[80vw] leading-6">{content}</p>
            </div>
            <div className="pt-[4vw] flex justify-center">
                <div className="w-[20vw] flex justify-between">
                    <button onClick={()=>slider?.current?.slickPrev()}><Image src={leftArrow} alt="left arrow"/></button>
                    <button onClick={()=>slider?.current?.slickNext()}><Image src={rightArrow} alt="right arrow"/></button>
                </div>
            </div>
        </div>
        
    )
}

function useIsMd() {
    const [isMd, setIsMd] = useState(false);

    const handleIsMd = () => {
        if(window.innerWidth > 768) setIsMd(true);
        else setIsMd(false);
    }

    useEffect(() => { 
        window.addEventListener('resize', handleIsMd);
        handleIsMd();
        return(() => {
            window.removeEventListener('resize', handleIsMd);
        })
    }, []);

    return isMd;
}

// posts: an arry which element contains content and image [{"content": "123", "img": photo}, {"content": "456", "img": photo}, ...]
export default function Activity({posts}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    const slider = useRef(null);
    const isMd = useIsMd();

    return (
        <section className="bg-[#464A53] text-[#FFFFFF] mx-[-34px] sm:mx-[-48px] h-auto md:h-[27vw] xl:h-[25vw]">
            <Slider ref={slider} settings={settings}>
                {posts.map(post => (
                    <div key={post.id}>
                        {isMd && <ActivitySecH content={post.content} img={post.img} slider={slider}/>}
                        {!isMd && <ActivitySecV content={post.content} img={post.img} slider={slider}/>}
                    </div>
                ))}
            </Slider>
        </section>
    )
    
}

/*

*/