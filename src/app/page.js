import Image from "next/image";
import homepageImg from "../../public/img/HomepageImg.svg";

export default function Home() {
	return (
        <div>
            <header className="banner grid justify-self-center overflow-hidden">
                <div className="grid self-center -translate-y-16 md:translate-y-0 gap-y-[1em]
                                justify-self-center md:justify-self-start justify-items-center
                                max-w-min md:ml-20 lg:ml-32 xl:ml-40 px-10">
                    <h1 className="w-max text-[4em] font-bold leading-normal tracking-wider">
                        梅竹黑客松<br />
                        <span className="text-primary-gradient">十週年</span>紀念
                    </h1>
                    <p>
                        {/* 我覺得 Subheading 不要太長比較好，一兩行剛剛好。怎麼感覺馬上刻網站的效果會比 Figma 好。ㄨㄚˊ 我現在覺得長一點好像也可以 QQ。本來是想要做 Neumorphism 的，但毛玻璃也不錯好猶豫啊啊啊 */}
                        在梅竹黑客松邁向十週年之際，我們決定以一個嶄新的方式，紀念過去十年走過的足跡。透過存放往年的優秀作品，我們能夠回顧並學習，同時讓未來的參與者能夠在此找尋與迸發創意。
                    </p>
                </div>
                <div className="frosted absolute w-screen h-full -top-1/3 md:top-0 md:-left-2/4
                                skew-x-0 -skew-y-30 md:-skew-x-30 md:skew-y-0 -z-1"></div>
            </header>

            <main>
                
            </main>

            <div className="banner-img grid fixed inset-0 place-content-center -z-2">
                <Image
                    src={homepageImg}
                    alt="Concept art of this website"
                    // layout="fill"
                    // placeholder="blur"
                    className="max-w-none max-h-none scale-200"
                    priority
                />
            </div>
        </div>
	);
}
