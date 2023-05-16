"use client";
import Image from "next/image";
import MemorySec from "./components/memorySec";
import TeamSec from "./components/teamSec";
import QnaSec from "./components/qnaSec";
import homepageImg from "../../public/img/HomepageImg.svg";
import useScrollPos from "./components/useScrollPos";
import { useRef, useState, useEffect } from "react";

export default function Home() {
    const memoryRef = useRef();
    const teamRef = useRef();
    const qnaRef = useRef();
    
	return (
        <div>
            <header className="banner grid overflow-hidden">
                <div className="grid max-w-min h-fit self-center justify-self-center md:justify-self-start
                                justify-items-center gap-y-[1em] -translate-y-12 sm:-translate-y-28
                                md:ml-20 lg:ml-32 xl:ml-40 px-10">
                    <h1 className="w-max">
                        梅竹黑客松<br />
                        <span className="text-primary-gradient">十週年</span>紀念
                    </h1>
                    <p>
                        {/* 我覺得 Subheading 不要太長比較好，一兩行剛剛好。怎麼感覺馬上刻網站的效果會比 Figma 好。ㄨㄚˊ 我現在覺得長一點好像也可以 QQ。本來是想要做 Neumorphism 的，但毛玻璃也不錯好猶豫啊啊啊 */}
                        在梅竹黑客松邁向十週年之際，我們決定以一個嶄新的方式，紀念過去十年走過的足跡。透過存放往年的優秀作品，我們能夠回顧並學習，同時讓未來的參與者能夠在此找尋與迸發創意。
                    </p>
                </div>
                <div className="banner-filter frost-50 absolute w-screen h-full -top-1/3 md:top-0 md:-left-2/4
                                skew-x-0 -skew-y-30 md:-skew-x-30 md:skew-y-0 -z-1"></div>
            </header>

            <main>
                <article>
                    <MemorySec ref={memoryRef} />
                    <TeamSec ref={teamRef} />
                    <QnaSec ref={qnaRef} />
                </article>
            </main>

            <BannerImg />
        </div>
	);
}

function BannerImg() {
    const scrollPos = useScrollPos();
    let x = 17.5, y = 12.5;

    console.log(scrollPos);
    if(scrollPos > 2625) {
        x = 70;
        y = -10;
    }
    else if(scrollPos > 1575) {
        x = -60;
        y = -60;
    }
    else if(scrollPos > 525) {
        x = 60;
        y = 30;
    }

    return (
        <div className="grid fixed inset-0 place-content-center -z-2 transition-all"
             style={{transform: `translate(${x}%, ${y}%)`}}>
            <Image
                src={homepageImg}
                alt="Concept art of this website"
                className="max-w-none max-h-none scale-300"
                priority
            />
        </div>
    );
}