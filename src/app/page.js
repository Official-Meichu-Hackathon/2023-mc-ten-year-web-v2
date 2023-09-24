"use client";
import { useRef, forwardRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Card, CardContent, CardH, CardImg, CardV, viewMore } from "./components/card"
import { Load, LoadFailed } from "./components/gadgets"
import Image from "next/image";
import homepageImg from "../../public/img/home/bg.svg";
import refImg from "../../public/img/Ref.png";

// useSWR
import useSWR from "swr";
import { fetcher } from "./utils/fetcher";



export default function Homepage() {
    const [aboutUsInView, setAboutUsInView] = useState(false);
    const [teamInView, setTeamInView] = useState(false);
    const [qnaInView, setQnaInView] = useState(false);

	return (
        <div>
            <header className="grid overflow-hidden h-svh">
                <div className="grid max-w-min self-center justify-items-center gap-y-[1em] px-6
                                justify-self-center md:justify-self-start
                                md:-translate-y-32 petite:translate-y-0
                                md:ml-20 lg:ml-32 xl:ml-40">
                    <h1 className="bracket-lg w-max whitespace-nowrap">
                        {/* // ? Shrink font size further, which base is h1 (because of "em" unit) */}
                        <span className="text-[0.875em] sm:text-[1em]">
                            梅竹黑客松<br />
                            <span className="text-primary-gradient">成果存放</span>
                            平台
                        </span>
                    </h1>
                    <p className="px-2">
                        在梅竹黑客松邁向十週年之際，我們決定以一個嶄新的方式，紀念過去十年走過的足跡。透過存放往年的優秀作品，我們能夠回顧並學習，同時讓未來的參與者能夠在此找尋與迸發創意。
                    </p>
                </div>
                <div className="banner-filter frost-50 absolute w-screen h-full -top-1/3 md:top-0 md:-left-2/4
                                skew-x-0 -skew-y-30 md:-skew-x-30 md:skew-y-0 -z-1"></div>
            </header>

            <main>
                <article className="grid">
                    <AboutUsSec setInView={setAboutUsInView} />
                    <TeamSec setInView={setTeamInView} />
                    <QnaSec setInView={setQnaInView} />
                </article>
            </main>

            <BannerImg aboutUsInView={aboutUsInView} teamInView={teamInView} qnaInView={qnaInView} />
        </div>
	);
}

function BannerImg({ aboutUsInView, teamInView, qnaInView }) {
    let x = 17.5, y = 12.5;
    if(qnaInView) {
        x = 70;
        y = -10;
    }
    else if(teamInView) {
        x = -60;
        y = -60;
    }
    else if(aboutUsInView) {
        x = 60;
        y = 30;
    }

    return (
        <div className="grid fixed inset-0 place-content-center -z-2
                        transition-all ease-out-quint duration-1000 motion-reduce:duration-300"
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



function InViewSec({ className, setInView, children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: 0.5
    });

    useEffect(() => {
        setInView(isInView);
    }, [isInView, setInView]);

    return (
        <section ref={ref} className={`${className}`}>
            {children}
        </section>
    );
}



function AboutUsSec({ setInView }) {
    const title = "關於我們";
    const content = "透過回顧與紀念歷史，我們才能帶著更多經驗與力量走向未來。在這個頁面中，我們會介紹梅竹黑客松的競賽精神與意義，簡單總結過去各年度的活動內容、賽制與工作人員，並以時間軸的方式呈現每年的特點或制度創新。藉由紀錄歷屆活動的內容，檢視相異年度的變革，我們能夠吸取並傳承過去的精髓，同時思索與探尋未來的無限可能。";

    return (
        <InViewSec className="wrapper min-h-screen place-items-center" setInView={setInView}>
            <Card className="w-min place-items-center max-w-4xl
                             md:w-auto md:grid-flow-col md:grid-cols-[auto_1fr]">
                <CardImg className="w-[18rem] md:h-full md:max-w-sm aspect-square" img={refImg} />
                <CardContent title={title} content={content} moreInfo={viewMore} link="/about" titleAlign="center" />
            </Card>
        </InViewSec>
    );
}



function TeamSec({ setInView }) {
    const { data, error, isLoading } = useSWR("/api/about", fetcher);
    if(error) return <LoadFailed />;
    if(isLoading) return <Load />;
    
    // TODO: Fix layout; Center in-view
    return (
        <InViewSec className="grid min-h-screen items-center" setInView={setInView}>
            <div className="swiper snap-inline
                            w-screen place-self-center
                            lg:w-[60vw] lg:place-self-end">
                {data.map((year) => (
                    <Card key={year.year} className="w-min place-items-center max-w-4xl">
                        <CardImg className="w-[18rem] md:h-full md:max-w-sm aspect-square" img={refImg} />
                        <CardContent title={year.year} content={year.description} moreInfo={viewMore} link={`/about/${year.year}`} titleAlign="center" />
                    </Card>
                ))}
            </div>
        </InViewSec>
    );
}



function QnaSec({ setInView }) {
    const img = refImg;
    const title = "Q & A";
    const content = "在這個頁面之中，我們會將大家的問題一併答覆，你可以根據熱門標籤或是直接搜尋問題關鍵字，解決自己的疑惑。";

    return (
        <InViewSec className="wrapper min-h-screen place-items-center" setInView={setInView}>
            <Card className="w-min place-items-center max-w-4xl
                             md:w-auto md:grid-flow-col md:grid-cols-[auto_1fr]">
                <CardImg className="w-[18rem] md:h-full md:max-w-sm aspect-square" img={img} />
                <CardContent title={title} content={content} moreInfo={viewMore} link="/qna" titleAlign="center" />
            </Card>
        </InViewSec>
    );
}