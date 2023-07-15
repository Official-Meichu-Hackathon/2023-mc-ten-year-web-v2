"use client";
import Image from "next/image";
import useSWR from "swr";
import homepageImg from "../../public/img/decoration/bg-home.svg";
import useScrollPos from "./components/useScrollPos";
import { useInView } from "framer-motion";
import { CardH, CardV, viewMore } from "./components/card"
import { Load, LoadFailed } from "./components/gadgets"
import refImg from "../../public/img/Ref.png";

export default function Home() {
	return (
        <div>
            <header className="grid overflow-hidden h-[100vh] h-[100lvh]">
                <div className="grid max-w-min h-fit self-center justify-items-center gap-y-[1em] px-6
                                justify-self-center md:justify-self-start
                                -translate-y-16 sm:translate-y-0 md:-translate-y-32
                                md:ml-20 lg:ml-32 xl:ml-40">
                    <h1 className="bracket-lg w-max">
                        <span className="">
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
                    <AboutUsSec />
                    <WorkSec />
                    <QnaSec />
                </article>
            </main>

            <BannerImg />
        </div>
	);
}

// TODO: Modify using useInView
function BannerImg() {
    const scrollPos = useScrollPos();
    let x = 17.5, y = 12.5;

    // console.log(scrollPos);
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
        <div className="grid fixed inset-0 place-content-center -z-2 transition-all ease-out-quint duration-1000 motion-reduce:duration-300"
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



function AboutUsSec() {
    const title = "關於我們";
    const contents = ["透過回顧與紀念歷史，我們才能帶著更多經驗與力量走向未來。在這個頁面中，我們會介紹梅竹黑客松的競賽精神與意義，簡單總結過去各年度的活動內容、賽制與工作人員，並以時間軸的方式呈現每年的特點或制度創新。藉由紀錄歷屆活動的內容，檢視相異年度的變革，我們能夠吸取並傳承過去的精髓，同時思索與探尋未來的無限可能。"];

    return (
        <section className="wrapper min-h-screen items-center">
            <CardH img={refImg} title={title} contents={contents} moreInfo={viewMore} link="/about" />
        </section>
    );
}



const fetcher = (url) => fetch(url).then((res) => res.json());
function WorkSec() {
    const { data, error } = useSWR("/api/about", fetcher);
    if(error) return <LoadFailed />;
	if(!data) return <Load />;
    
    // TODO: Fix layout; Center in-view
    return (
        <section className="grid min-h-screen items-center">
            <div className="swiper snap-x snap-mandatory
                            w-screen place-self-center
                            lg:w-[60vw] lg:place-self-end">
                {data.map((year) => (
                    <CardV key={year.year} img={refImg} title={year.year} contents={year.description} moreInfo={viewMore} link={`/about/${year.year}`} />
                ))}
            </div>
        </section>
    );
}



function QnaSec() {
    const img = refImg;
    const title = "Q & A";
    const contents = ["在這個頁面之中，我們會將大家的問題一併答覆，你可以根據熱門標籤或是直接搜尋問題關鍵字，解決自己的疑惑。"];

    return (
        <section className="wrapper min-h-screen items-center">
            <CardH img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" />
        </section>
    );
}