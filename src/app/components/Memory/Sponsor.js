import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import { compare } from "swr/_internal";
import { Medula_One } from "next/font/google";
import leftArrow from "../../../../public/img/mingcute_left-fill.svg"
import rightArrow from "../../../../public/img/mingcute_right-fill.svg"
import Image from "next/image";


function Slide1({data}){
    return (<div className="pt-[90px] ">

        <div>
            <div className="text-2xl font-bold flex-auto ">
                <p>創客交流組合作單位</p>
            </div>
            <div>
                {data.map((obj, index) =>( 
                    ( obj.type  == "創客交流組合作單位") && (<><text key={index}></text>{obj.company}<text key={index}>{'、'}</text></>) 
                    ))}
            </div>
        </div>

        <div className="pt-10">
            <div className="text-2xl font-bold flex justify-start">
                <p>黑客組合作企業</p>
            </div>
            <div>
                {data.map((obj, index) =>( 
                    ( obj.type  == "黑客組合作企業") && (<><text key={index}></text>{obj.company}<text key={index}>{'、'}</text></>) 
                    ))}
            </div>
        </div>

    </div>);

}

function Slide2({data}){
    return (
        <div className="">
        <div>
            <div className="text-2xl font-bold flex justify-start">
                <p>贊助企業</p>
            </div>
            <div className="py-0.5 text-[14px]">
                <b>PLATIMUM | </b>
                {data.map((obj, index) =>( 
                    ( obj.type  == "贊助企業" && obj.level == "PLATIMUM") && (<><text key={index}></text>{obj.company}<text key={index}>{'、'}</text></>)
                    ))}
            </div>
            <div className="py-0.5 text-[14px]">
                <b>GOLD | </b>
                {data.map((obj, index) =>( 
                    ( obj.type  == "贊助企業" && obj.level == "GOLD") && (<><text key={index}></text>{obj.company}<text key={index}>{'、'}</text></>)
                    ))}
            </div>
            <div className="py-0.5 text-[14px]">
                <b>SILVER | </b>
                {data.map((obj, index) =>( 
                    ( obj.type  == "贊助企業" && obj.level == "SILVER") && (<><text key={index}></text>{obj.company}<text key={index}>{'、'}</text></>)
                    ))}
            </div>
            <div className="py-0.5 text-[14px]">
                <b>BRONZE | </b>
                {data.map((obj, index) =>( 
                    ( obj.type  == "贊助企業" && obj.level == "BRONZE") && (<><text key={index}></text>{obj.company}<text key={index}>{'、'}</text></>)
                    ))}
            </div>
        </div>

        <div>
            <div className="text-2xl font-bold flex justify-start">
                <p>特殊贊助</p>
            </div>
            <div className="py-0.0 text-[14px]">
                <b>GOLD | </b>
                {data.map((obj, index) =>( 
                    ( obj.type  == "特殊贊助" && obj.level == "GOLD") && (<><text key={index}></text>{obj.company}<text key={index}>{'、'}</text></>)
                    ))}
            </div>
            <div className="py-0.5 text-[14px]">
                <b>SILVER | </b>
                {data.map((obj, index) =>( 
                    ( obj.type  == "特殊贊助" && obj.level == "SILVER") && (<><text key={index}></text>{obj.company}<text key={index}>{'、'}</text></>)
                    ))}
            </div>
            <div className="py-0.5 text-[14px]">
                <b>BRONZE | </b>
                {data.map((obj, index) =>( 
                    ( obj.type  == "特殊贊助" && obj.level == "BRONZE") && (<><text key={index}></text>{obj.company}<text key={index}>{'、'}</text></>)
                    ))}
            </div>
            <div className="py-0.5 text-[14px]">
                <b>FRESHMAN | </b>
                {data.map((obj, index) =>( 
                    ( obj.type  == "特殊贊助" && obj.level == "FRESHMAN") && (<><text key={index}></text>{obj.company}<text key={index}>{'、'}</text></>)
                    ))}
            </div>
            <div className="py-0.5 text-[14px]">
                <b>協辦單位 | </b>
                {data.map((obj, index) =>( 
                    ( obj.type  == "特殊贊助" && obj.level == "協辦單位") && (<><text key={index}></text>{obj.company}<text key={index}>{'、'}</text></>)
                    ))}
            </div>
            <div className="py-0.5 text-[14px]">
                <b>特別感謝 | </b>
                {data.map((obj, index) =>( 
                    ( obj.type  == "特殊贊助" && obj.level == "特別感謝") && (<><text key={index}></text>{obj.company}<text key={index}>{'、'}</text></>)
                    ))}
            </div>
            
        </div>


        </div>
    );
}

function Mobile({data}) {
    return (<div>
        <Slide1 data={data}/>
        <Slide2 data={data}/>
    </div>);
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className=""
        onClick={()=>slider?.current?.slickPrev()}
      ><Image src={rightArrow} alt="left arrow"/></div>
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        
        onClick={()=>slider?.current?.slickPrev()}
      ><Image src={leftArrow} alt="left arrow"/></div>
    );
}

function PC({data}) {
    const ArrowLeft = (props) => (
        <div className="">
      <button
        onClick={()=>slider?.current?.slickPrev()}
            ><Image src={leftArrow} alt="left arrow"/></button>
        </div>
    );
    const ArrowRight = (props) => (
      <button
       onClick={()=>slider?.current?.slickNext()}
           ><Image src={rightArrow} alt="left arrow"/></button>
    );

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,  // 一次顯示幾張
        slidesToScroll: 1, // 按下一頁的時候，要跑幾張
        arrows: true,
       // prevArrow: <ArrowLeft />,
       // nextArrow: <ArrowRight />,
    };
    const slider = useRef(null);


    return (    
        <div className="grid grid-cols-9">
        <div className="place-self-center">
        <button
        onClick={()=>slider?.current?.slickPrev()}
            ><Image src={leftArrow} alt="left arrow"/>
        </button>
        </div>
        <div className="col-span-7"> 
        <Slider ref={slider} {...settings}>
            <div>
                <Slide1 data={data}/>
            </div>
            <div>
                <Slide2 data={data}/>
            </div>
        </Slider>
        </div>
        <div className="place-self-center"><ArrowRight/></div>
        </div>
    );

}
const useRWD=()=>{
    const [mobile,setMobile]=useState("PC");

    const handleRWD=()=>{
        if(window.innerWidth>768)
            setMobile("PC");
        else
            setMobile("mobile");
    }

    useEffect(()=>{
    
        window.addEventListener('resize',handleRWD);
        handleRWD(); //加入此行
        
        return(()=>{
            window.removeEventListener('resize',handleRWD);
        })
    },[]);

    return mobile;
}
export function Sponsor({data}){
    
    const device=useRWD("PC");
    if (device==="PC") return (
        <PC data={data} />
    );
    else return (<Mobile data={data}/>);


    /*return (
        <div className="pl-32">
            <div className="text-2xl font-bold flex justify-start">
                <p>{group}</p>
            </div>
            <div>
                {list.map((content, index) =>{ 
                    return(index !== 0 ? 
                    (<><text key={index}>{'、'}</text><text key={index}>{content}</text></>):(<text key={index}>{content}</text>));
                })}
            </div>
        </div>
    ); */


}   