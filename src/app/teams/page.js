"use client";
import Image from "next/image";
import useSWR from "swr";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CardH, CardV } from "../components/Team/Card"
import { viewMore } from "../components/card";
import { Card_title } from "../components/Team/Card_title";
import { Project_Intro } from "../components/Team/Project_Intro";
import { Board } from "../components/Team/Comments";
import { Search_bar, Post } from "../components/Team/Gadgets";
import refImg from "../../../public/img/Ref.png";
import Filter from "../components/Team/Filter";
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

    return (
        <div>
            <header>
                <div className="flex items-center justify-between">
                    <h1 className="bracket-md justify-center">歷年作品</h1>
                    <div className="lg:hidden">
                        <Search_bar />
                    </div>
                </div>

            </header>
            <main>
                <article className="grid">
                    <CardSec setInView={setCardInView} isMobile={isMobile} />
                </article>
            </main>
        </div>
    )
}



function CardSec({ setInView, isMobile }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: 0.5
    });
    useEffect(() => {
        setInView(isInView);
    }, [isInView, setInView]);

    const team = [
        {
            id: 1,
            title: "隊伍名稱的地方，可能名字超級長就會變到第二行或直接不見之類的",
            img: refImg,
            group: "2022 創客組",
            contents: ["這邊是隊伍的敘述，不知道要打甚麼。梅竹黑客松好棒好棒好棒好好棒好棒好好棒好棒好好棒好棒好"], 
            award: "冠軍"
        },
        {
            id: 2,
            title: "隊伍名稱",
            img: refImg,
            group: "2022 創客組",
            contents: ["這邊是隊伍的敘述，不知道要打甚麼。梅竹黑客松好棒好棒好棒好好棒好棒好好棒好棒好好棒好棒好"], 
            award: "冠軍"
        },
        {
            id: 3,
            title: "隊伍名稱的地方",
            img: refImg,
            group: "2022 創客組",
            contents: ["這邊是隊伍的敘述，不知道要打甚麼。梅竹黑客松好棒好棒好棒好好棒好棒好好棒好棒好好棒好棒好"], 
            award: "冠軍"
        },
        {
            id: 4,
            title: "隊伍名稱的地方，可能名字",
            img: refImg,
            contents: ["這邊是隊伍的敘述，不知道要打甚麼。梅竹黑客松好棒好棒好棒好好棒好棒好好棒好棒好好棒好棒好"], 
            group: "2022 創客組",
            award: "亞軍"
        },
        {
            id: 5,
            title: "隊伍名稱的地方，可能名字超級長就",
            img: refImg,
            group: "2022 創客組",
            contents: ["這邊是隊伍的敘述，不知道要打甚麼。梅竹黑客松好棒好棒好棒好好棒好棒好好棒好棒好好棒好棒好"], 
            award: "冠軍"
        },
        {
            id: 6,
            title: "隊伍名稱的地方，可能名字超級長就會變到第",
            img: refImg,
            contents: ["這邊是隊伍的敘述，不知道要打甚麼。梅竹黑客松好棒好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒。"], 
            group: "2022 創客組",
            award: "季軍"
        },
    ];


    return (
        <section ref={ref}>

            <div className="grid grid-cols-[1fr,auto] items-start justify-center">
                <div className="">
                    <Filter checkBoxNames={checkBoxNames} isMobile={isMobile} />
                </div>
                <div className="flex flex-col lg:flex-row gap-8 justify-end ">
                    <div className="justify-end hidden lg:block ">
                        <Search_bar />
                    </div>
                    <div className="justify-end">
                        <Post />
                    </div>
                </div>
            </div>

            <div className="grid gap-14 py-16 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 items-center justify-center justify-items-center">
                {team.map(item => (
                    <CardV
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        contents={item.contents}  // 這裡的 contents 可能需要根據你的需求更改
                    />
                ))}
            </div>


        </section>
    );
}




const checkBoxNames = 

[
    {id : 0, name: "年份  ", data: [2021,2022,2023,2024]},
    {id : 1, name: "組別  ", data: ["黑客組", "創客組", "交流組","團體組", "創客交流組"]   },
    {id : 2, name: "得獎作品", data:["冠軍"]},
]

