"use client";
import Image from "next/image";
import useSWR from "swr";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CardH, CardV} from "../components/Team/Card"
import { viewMore } from "../components/card";
import { Card_title } from "../components/Team/Card_title";
import { Project_Intro } from "../components/Team/Project_Intro";
import { Board } from "../components/Team/Comments";
import { Search_bar, Post } from "../components/Team/Gadgets";
import refImg from "../../../public/img/Ref.png";
import Filter  from "../components/Team/Filter";
import { ImageSlider } from "../components/Team/Slides";
import { Comment_Card } from "../components/Team/Comment_card";



export default function Home() {
    const [cardInView, setCardInView] = useState(false);
    const [isMobile, setIsMobile] = useState(true); // Default to mobile

    
    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);    

    return(
        <div>
            <header>
                <h1 className="bracket-md">測試功能</h1>
            </header>
            <main>
                <article className="grid">
                    <CardSec setInView={setCardInView} isMobile={isMobile} />
                </article>
            </main>
        </div>
    )
}






function CardSec({ setInView, isMobile}){
    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: 0.5
    });
    useEffect(() => {
        setInView(isInView);
    }, [isInView, setInView]);

    const img = refImg;
    const title = "隊伍名稱的地方，可能名字超級長就會變到第二行或直接不見之類的";
    const contents = ["這邊是隊伍的敘述，不知道要打甚麼。梅竹黑客松好棒好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒。"];
    const group = "2022 創客組";
    const award = " 冠軍 ";
      

    return (
        <section ref={ref}>


            <div className="grid gap-14 py-16 md:px-8 lg:mx-10 grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award} />
                <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
                <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
                <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
                <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
                <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
            </div>
            
            <div className="p-4 grid md:grid-cols-3 gap-4 h-[1rem]">
                <div className="">
                    <Search_bar/>
                </div>
                <div className="">
                    <Post />
                </div>
            </div>

            <div className="pt-16">
                <Filter checkBoxNames = {checkBoxNames} isMobile={isMobile} />
            </div>
        </section>
    );
}

/*

const checkBoxNamess = [

    [
        {id : 0, name: "2021"},
        {id : 1, name: "2022"},
        {id : 2, name: "2023"},
        {id : 3, name: "2024"}

    ],
    [
        {id : 0, name: "黑客組"},
        {id : 1, name: "創客組"},
        {id : 2, name: "交流組"},
        {id : 3, name: "創客交流組"},
        {id : 4, name: "團體組"}

    ],
    [
        {id : 0, name: "得獎作品"},

    ]

]

*/


const checkBoxNames = 


[
    {id : 0, name: "年份  ", data: [2021,2022,2023,2024]},
    {id : 1, name: "組別  ", data: ["黑客組", "創客組", "交流組", "創客交流組","團體組"]   },
    {id : 2, name: "得獎作品", data:["abc"]},
]




