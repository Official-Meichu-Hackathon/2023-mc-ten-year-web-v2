import Image from "next/image";
import Link from "next/link";
import { System, SystemForSmallIcon } from "./System";
import Activity from "./Activity";
import Nav from "./Navigation";

/* ----------- image ---------- */
import photo from "../../../../public/img/memory/activity_groupPhoto_2022.svg";
import hacker_icon from "../../../../public/img/memory/system_hacker.svg";
import maker_icon from "../../../../public/img/memory/system_maker.svg";
import company_icon from "../../../../public/img/memory/system_company.svg";
import themePhoto2019 from "../../../../public/img/memory/themePhoto_2019.png";
import themePhoto2020 from "../../../../public/img/memory/themePhoto_2020.png";
import themePhoto2021 from "../../../../public/img/memory/themePhoto_2021.png";
import themePhoto2022 from "../../../../public/img/memory/themePhoto_2022.png";

export function Year_2019() {
    const links = [
        ["賽制介紹", "about/2019/#system"],
        ["活動實況", "about/2019/#activity"],
        ["合作企業", "about/2019/#sponsor"],
        ["工作人員", "about/2019/#staff"]
    ];
    const description = "2019，我們嘗試推動更多的可能。\n新竹市政府加入，成立「創客組」，讓學生在政府的資源下，利用科技開創新思路，為社會議題提供完善的可能。";
    const systemContent = [
        "搭起學生與企業之間的橋樑，學生發揮潛力回應企業的挑戰，企業方更能提供實習機會，讓學生進一步實踐創意發想！由五家企業作為引導單位，初賽時由各企業選出前三名獲得企業獎。企業獎第一名進入決賽，決賽時再由五隊中選出梅竹大獎首獎隊伍。",
        "由新竹市政府作為引導單位，最終將選出前三名作為獲勝隊伍。"
    ];
    const activityContent = [
        {
            "content": "2019-2022梅竹黑客松好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒。",
            "img": photo
        },
        {
            "content": "2019-2023梅竹黑客松好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒。",
            "img": photo
        },
        {
            "content": "2019-2021梅竹黑客松好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒。",
            "img": photo
        }
    ];

    return (
        <div className="overflow-visible">
            <header>
                <div className="mx-[-3rem]">
                    <Image src={themePhoto2019} alt="themePhoto2019" className="object-cover w-full"></Image>
                </div>
                <h1 className="bracket-md mt-4">2019 梅竹黑客松</h1>
            </header>
            <Nav links={links}/>
            <main>
                <article className="mt-[3.75rem]">
                    <section>
                        {description.split('\n').map(line => (
                            <div key="1" className="text-black/70">
                                {line}
                                <br/>
                                <br/>
                            </div>
                        ))}
                    </section>
                </article>
                <div id="system" className="mt-9">
                    <h2 className="mb-12">賽制介紹</h2>
                    <div className="sm:grid lg:flex lg:justify-evenly w-full">
                        <div className="w-full lg:w-[31vw]"><System title="黑客組" contents={systemContent[0]} img={hacker_icon}/></div>
                        <div className="w-full lg:w-[31vw]"><System title="創客交流組" contents={systemContent[1]} img={maker_icon}/></div>
                    </div>
                </div>
                <div id="activity" className="mt-36">
                    <h2 className="mb-12">活動實況</h2>
                    <Activity posts={activityContent}/>
                </div>
                <div id="topic" className="mt-36">
                    <h2>出題介紹</h2>
                </div>
                <div id="sponsor" className="mt-36">
                    <h2>贊助企業</h2>
                </div>
                <div id="staff" className="mt-36">
                    <h2>工作人員</h2>
                </div>
            </main>
        </div>
    );
};

export function Year_2020() {
    const links = [
        ["賽制介紹", "about/2019/#system"],
        ["活動實況", "about/2019/#activity"],
        ["合作企業", "about/2019/#sponsor"],
        ["工作人員", "about/2019/#staff"]
    ];
    const description = "2020 梅竹黑客松，我們更加強調跨領域人才的加入。\n除了發展漸趨成熟的黑客組與創客組外，全新的「社企組」在本年度首度創建，我們期望透過競賽議題的多樣性，賦予梅竹黑客松不一樣的可能，並吸引更多領域的好手前來體驗黑客松的魅力，相互激盪出創新的火花。\n2020 梅竹黑客松主視覺以交通工具為主題，體現出在疫情爆發的當下，即使大家被隔離在家中，但網路扮演著交通工具的角色將大家串連起來。同時淺色系的配色，也療癒了大家被隔離在家中的鬱悶氣息。";
    const systemContent = [
        "搭起學生與企業之間的橋樑，學生發揮潛力回應企業的挑戰，企業方更能提供實習機會，讓學生進一步實踐創意發想！",
        "發揮公民科技的精神，透過科技讓公部門更為高效，縮短政府與你的距離！",
        "社企組閃亮新登場，題目面向更多元，推動社會創新成為可能！"
    ];
    const activityContent = [
        {
            "content": "2020-2022梅竹黑客松好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒。",
            "img": photo
        },
        {
            "content": "2020-2023梅竹黑客松好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒。",
            "img": photo
        },
        {
            "content": "2020-2021梅竹黑客松好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒。",
            "img": photo
        }
    ];
    return(
        <div className="overflow-visible">
            <header>
                <div className="mx-[-3rem]">
                    <Image src={themePhoto2020} alt="themePhoto2019" className="object-cover w-full"></Image>
                </div>
                <h1 className="bracket-md">2020 梅竹黑客松</h1>
            </header>
            <Nav links={links}/>
            <main>
                <article className="mt-[3.75rem]">
                    <section>
                        {description.split('\n').map(line => (
                            <div key="1" className="text-black/70">
                                {line}
                                <br/>
                                <br/>
                            </div>
                        ))}
                    </section>
                </article>
                <div id="system" className="mt-9">
                    <h2 className="mb-12">賽制介紹</h2>
                    <div className="sm:grid lg:flex lg:justify-between w-full">
                        <div className="w-full lg:w-[26vw]"><System title="黑客組" contents={systemContent[0]} img={hacker_icon}/></div>
                        <div className="w-full lg:w-[26vw]"><System title="創客交流組" contents={systemContent[1]} img={maker_icon}/></div>
                        <div className="w-full lg:w-[26vw]"><SystemForSmallIcon title="社企組" contents={systemContent[2]} img={company_icon}/></div>
                    </div>
                </div>
                <div id="activity" className="mt-36">
                    <h2 className="mb-12">活動實況</h2>
                    <Activity posts={activityContent}/>
                </div>
                <div id="topic" className="mt-36">
                    <h2>出題介紹</h2>
                </div>
                <div id="sponsor" className="mt-36">
                    <h2>贊助企業</h2>
                </div>
                <div id="staff" className="mt-36">
                    <h2>工作人員</h2>
                </div>
            </main>
        </div>
    )
};

export function Year_2021() {
    const links = [
        ["賽制介紹", "about/2019/#system"],
        ["活動實況", "about/2019/#activity"],
        ["合作企業", "about/2019/#sponsor"],
        ["工作人員", "about/2019/#staff"]
    ];
    const description = "延續前一屆社企組的理念，除了保持競賽題目的多樣性外，2021 梅竹黑客松更加重視人與人之間的交流，因此將「社企組」轉變為「交流組」。在科技發展迅速、疫情植根於社會的時代，我們期望能回歸黑客松的本質 —— 鼓勵參賽者勇於提出自己的想法，與他人切磋、交流，藉此激發出不一樣的可能。\n今年因為疫情的緣故，2021 梅竹黑客松改為線上舉辦，我們透過參與感較高的軟體 Gather 作為虛擬活動場地，搭配學生熟悉的語音軟體 Discord 作為討論和 Demo 的工具，嘗試還原線下熱情與緊張的氣氛。此外，2021 年梅竹黑客松邀請到美光、原相、Supermicro、104 以及 Line 擔任黑客組的合作企業。另外，我們將社企組改為交流組，並讓參賽者自訂題目，以不同的角度切入問題，提供更加多元的解決方案。2021 年參賽總人數為 201 人，其中有 42% 的參賽者來自國立陽明交通大學、35% 來自國立清華大學、23% 來自其餘學校。\n礙於疫情，2021 梅竹黑客松改為線上舉辦，但我們仍堅信，人們交流的間隔必定遠小於彼此間的距離。";
    const systemContent = [
        "搭起學生與企業之間的橋樑，學生發揮潛力回應企業的挑戰，企業方更能提供實習機會，讓學生進一步實踐創意發想！由五家企業作為引導單位，初賽時由各企業選出前三名獲得企業獎。企業獎第一名進入決賽，決賽時再由五隊中選出梅竹大獎首獎隊伍。",
        "我們期許跨領域人才的加入，以不同角度切入問題，提供更多元的解決方案，比起競賽我們更重視過程中想法的激盪，並肯定每個創新的想法。交流組的參賽者可自訂題目，透過議題的多樣性，賦予梅竹黑客松不一樣的可能。"
    ];
    const activityContent = [
        {
            "content": "2021-2022梅竹黑客松好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒。",
            "img": photo
        },
        {
            "content": "2021-2023梅竹黑客松好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒。",
            "img": photo
        },
        {
            "content": "2021-2021梅竹黑客松好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒。",
            "img": photo
        }
    ];
    return (
        <div className="overflow-visible">
            <header>
                <div className="mx-[-3rem]">
                    <Image src={themePhoto2021} alt="themePhoto2019" className="object-cover w-full"></Image>
                </div>
                <h1 className="bracket-md">2021 梅竹黑客松</h1>
            </header>
            <Nav links={links}/>
            <main>
                <article className="mt-[3.75rem]">
                    <section>
                        {description.split('\n').map(line => (
                            <div key="1" className="text-black/70">
                                {line}
                                <br/>
                                <br/>
                            </div>
                        ))}
                    </section>
                </article>
                <div id="system" className="mt-9">
                    <h2 className="mb-12">賽制介紹</h2>
                    <div className="sm:grid lg:flex lg:justify-evenly w-full">
                        <div className="w-full lg:w-[31vw]"><System title="黑客組" contents={systemContent[0]} img={hacker_icon}/></div>
                        <div className="w-full lg:w-[31vw]"><System title="創客交流組" contents={systemContent[1]} img={maker_icon}/></div>
                    </div>
                </div>
                <div id="activity" className="mt-36">
                    <h2 className="mb-12">活動實況</h2>
                    <Activity posts={activityContent}/>
                </div>
                <div id="topic" className="mt-36">
                    <h2>出題介紹</h2>
                </div>
                <div id="sponsor" className="mt-36">
                    <h2>贊助企業</h2>
                </div>
                <div id="staff" className="mt-36">
                    <h2>工作人員</h2>
                </div>
            </main>
        </div>
    );
};

export function Year_2022() {
    const links = [
        ["賽制介紹", "about/2019/#system"],
        ["活動實況", "about/2019/#activity"],
        ["合作企業", "about/2019/#sponsor"],
        ["工作人員", "about/2019/#staff"]
    ];
    const description = "一些話一些話一些話一些話一些話一些話一些話一些話。\n一些話一些話一些話一些話一些話一些話一些話一些話一些話一些話一些話一些話一些話一些話一些話一些話一些話一些話一些話一些話。\n好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒。";
    const systemContent = [
        "我們致力於搭起學生與企業之間的橋樑，學生運用企業資源並發揮潛力回應企業命題，同時企業方更提供實習機會，能讓學生進一步實踐創意發想！而今年我們將由以下七家企業作為引導單位： 台積電、意法半導體、中國信託、ASML、原相科技、恩智浦半導體、Kronos Research 麒點科技",
        "由新竹市政府命題，融入新竹居民真實生活情境與議題，鼓勵運用分享、學習與實作，實際的解決問題與提出方案，並促進創作過程人才交流，體現創新創意、數位應用及動手實作、解決問題的黑客精神！"
    ];
    const activityContent = [
        {
            "content": "2022-2022梅竹黑客松好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒。",
            "img": photo
        },
        {
            "content": "2022-2023梅竹黑客松好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒。",
            "img": photo
        },
        {
            "content": "2022-2021梅竹黑客松好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒。",
            "img": photo
        }
    ];
    return (
        <div className="overflow-visible">
            <header>
                <div className="mx-[-3rem]">
                    <Image src={themePhoto2022} alt="themePhoto2019" className="object-cover w-full"></Image>
                </div>
                <h1 className="bracket-md">2022 梅竹黑客松</h1>
            </header>
            <Nav links={links}/>
            <main>
                <article className="mt-[3.75rem]">
                    <section>
                        {description.split('\n').map(line => (
                            <div key="1" className="text-black/70">
                                {line}
                                <br/>
                                <br/>
                            </div>
                        ))}
                    </section>
                </article>
                <div id="system" className="mt-9">
                    <h2 className="mb-12">賽制介紹</h2>
                    <div className="sm:grid lg:flex lg:justify-evenly w-full">
                        <div className="w-full lg:w-[31vw]"><System title="黑客組" contents={systemContent[0]} img={hacker_icon}/></div>
                        <div className="w-full lg:w-[31vw]"><System title="創客交流組" contents={systemContent[1]} img={maker_icon}/></div>
                    </div>
                </div>
                <div id="activity" className="mt-36">
                    <h2 className="mb-12">活動實況</h2>
                    <Activity posts={activityContent}/>
                </div>
                <div id="topic" className="mt-36">
                    <h2>出題介紹</h2>
                </div>
                <div id="sponsor" className="mt-36">
                    <h2>贊助企業</h2>
                </div>
                <div id="staff" className="mt-36">
                    <h2>工作人員</h2>
                </div>
            </main>
        </div>
    );
};
