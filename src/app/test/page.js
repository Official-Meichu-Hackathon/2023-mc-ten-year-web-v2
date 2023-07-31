"use client";
import Image from "next/image";
import useSWR from "swr";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CardH, CardV, viewMore } from "../components/Team/Card"
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
    const title = "隊伍名稱";
    const contents = ["這邊是隊伍的敘述，讓隊伍看起來強到不行。"];
    const group = "2022 創客組";
    const award = " 冠軍 ";

    return (
        <section ref={ref} className="grid grid-cols-3 gap-14">
            <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award} />
            <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
            <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
            <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
            <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
            <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
        </section>
    );
}