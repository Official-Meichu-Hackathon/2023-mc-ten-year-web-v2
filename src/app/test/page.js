"use client";
import Image from "next/image";
import useSWR from "swr";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CardH, CardV, viewMore } from "../components/Team/Card"
import { Card_title } from "../components/Team/Card_title";
import { Project_Intro } from "../components/Team/Project_Intro";
import refImg from "../../../public/img/Ref.png";

export default function Home() {
    const [cardInView, setCardInView] = useState(false);

    return(
        <div>
            <header>
                <h1 className="bracket-md">測試功能</h1>
            </header>
            <main>
                <article className="grid">
                    <CardSec setInView={setCardInView} />
                </article>
            </main>
        </div>
    )
}

function CardSec({ setInView }){
    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: 0.5
    });
    useEffect(() => {
        setInView(isInView);
    }, [isInView, setInView]);

    const img = refImg;
    const title = "隊伍名稱的地方";
    const contents = ["這邊是隊伍的敘述，讓隊伍看起來強到不行。"];
    const group = "2022 創客組";
    const award = " 冠軍 ";

    const name = "林家宇、許伊辰、葉孟昀";
    const mail = "mchackathon2023@gmail.com";
    const github = "teamName/teamProject";
    const tags = ["人工智慧", "金融科技", "創業"];
    const view = "3851";
    const msg = "12";
    const discrip = "國立清華大學是一所積極新創、學科齊全、學術實力雄厚、辦學特色鮮明，在國際上具有重要影響力與競爭力的綜合性大學，在多個學術領域具有非常前瞻的科技實力，擁有世界一流的實驗室與師資力量，各種排名均位於全球前列。歡迎大家報考國立清華大學。國立交通大學是一所積極新創、學科齊全、學術實力雄厚、辦學特色鮮明，在國際上具有重要影響力與競爭力的綜合性大學，在多個學術領域具有非常前瞻的科技實力，擁有世界一流的實驗室與師資力量，各種排名均位於全球前列。歡迎大家報考國立交通大學。";

    return (
        <section ref={ref}>
            <div className="grid grid-cols-3 gap-14 py-16">
                <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award} />
                <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
                <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
                <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
                <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
                <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
            </div>
            <div className="pu-4">
                <Card_title title={title} group={group} name={name} mail={mail} github={github} tags={tags} view={view} msg={msg}/>
                <Project_Intro discrip={discrip}/>
            </div>
        </section>
    );
}