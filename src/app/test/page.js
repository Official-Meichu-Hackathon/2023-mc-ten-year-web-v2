"use client";
import Image from "next/image";
import useSWR from "swr";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CardH, CardV, viewMore } from "../components/Team/Card"
import { Card_title } from "../components/Team/Card_title";
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
            </div>
        </section>
    );
}