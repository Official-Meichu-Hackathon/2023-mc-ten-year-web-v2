"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardImg } from "@/app/components/card";
import DefaultBanner from "/public/img/about/banner/default.webp";
import Hacker from "/public/img/about/hacker.svg";
import Maker from "/public/img/about/maker.svg";
import Idea from "/public/img/about/idea.svg";

// useSWR
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { Load, LoadFailed, LoadCustom } from "../../components/gadgets"
import { ImageSlider } from "@/app/components/teampage/team/imageSlider";

// TODO: Real company logos or not?
import CompanyTemp from "/public/img/deco/company_temp.svg"



export default function YearPage({ params }) {
    const { data, error, isLoading } = useSWR(params.year ? `/api/about/${params.year}` : null, fetcher);

	if (error) return <LoadFailed />;
	if (isLoading) return <Load />;
    if (data && parseInt(params.year, 10) < 2019) return <LoadCustom msg={`現在的年輕人都不知道了嗎 ...`}/>;
    if (data && data.invalid) return <LoadCustom msg={`你快點回火星吧，地球是很危險的！`}/>;
    if (data && data.notFound) return <LoadCustom msg={`首位來自 ${params.year} 年的時空旅人出現了！`}/>;

    return (
        <div className="my-16 petite:my-16 md:my-10">
            <header className="pt-2 md:pt-0 mb-4">
                <Banner params={params} />
                <div className="wrapper">
                    <h1 className="bracket-md">{params.year} 梅竹黑客松</h1>
                </div>
            </header>
            <main>
                <article className="grid gap-y-32 [&_h2]:mb-16">
                    <section id="year-description" className="wrapper">
                        <p className="whitespace-pre-line">
                            {data.description}
                        </p>
                    </section>

                    <Competition competition={data.competition} />

                    <Scenes scenes={data.scenes} params={params} />

                    <Topics topics={data.topics} />

                    <Sponsors sponsors={data.sponsors} />

                    <Staffs staffs={data.staffs} params={params} />
                </article>
            </main>
        </div>
    );
}



function Banner({ params }) {
    const [bannerImg, setBannerImg] = useState(null);

    useEffect(() => {
        async function fetchBannerImg(year) {
            const parsedYear = parseInt(year, 10);
            try {
                const imgModule = await import(`/public/img/about/banner/${parsedYear}.webp`);
                console.log(imgModule);
                setBannerImg(imgModule.default);
            } catch (error) {
                console.error("Failed to load banner image", error);
                setBannerImg(DefaultBanner);
            }
        }

        fetchBannerImg(params.year);
    }, [params.year]);

    return (
        <div className="flex h-48 md:h-72 xl:h-96 overflow-hidden mb-8 bg-gradient-primary-30">
            {bannerImg && 
                <Image
                    src={bannerImg}
                    alt={"Banner image of " + params.year}
                    className="w-screen object-cover"
                    quality={100}
                    priority
                />
            }
        </div>
    );
}

function Competition({ competition }) {
    function getImgFromType(type) {
        switch (type) {
            case "hacker":
                return Hacker;
            case "maker":
                return Maker;
            case "idea":
                return Idea;
            default:
                return Hacker;
        }
    }

    return (
        <section id="year-competition" className="wrapper">
            <h2 className="whitespace-nowrap">賽制介紹</h2>
            <div className="grid justify-center md:grid-flow-col md:justify-around gap-16">
                {competition.systems.map((system, index) => (
                    <Card key={index} className="max-w-sm">
                        <CardImg img={getImgFromType(system.type)} rounded={false} contain />
                        <CardContent title={system.title} content={system.description} titleAlign="center" />
                    </Card>
                ))}
            </div>
        </section>
    );
}

function Scenes({ scenes, params }) {
    const [slides, setSlides] = useState([{ img: DefaultBanner }]);

    useEffect(() => {
        async function fetchSlides(year) {
            const parsedYear = parseInt(year, 10);
            try {
                let imgModuleList = await Promise.all(
                    scenes.imgs.map(async img => {
                        try {
                            const imgModule = await import(`/public/img/about/scenes/${parsedYear}/${img}`);
                            return { img: imgModule.default };
                        } catch (error) {
                            console.error("Failed to import image", error);
                        }
                    })
                );

                imgModuleList = imgModuleList.filter(imgModule => imgModule !== undefined);
                if (imgModuleList.length !== 0) setSlides(imgModuleList);
            } catch (error) {
                console.error("Failed to load slide images", error);
            }
        }

        fetchSlides(params.year);
    }, [scenes, params.year]);

    return (
        <section id="year-scenes">
            <div className="wrapper">
                <h2 className="whitespace-nowrap">活動實況</h2>
            </div>
            <div className="grid md:flex md:justify-between py-12 bg-primary-invert">
                <div className="wrapper md:grid-flow-col auto-cols-fr gap-16">
                    <p className="text-primary-invert whitespace-pre-line">
                        {scenes.description}
                    </p>
                    <div className="translate-y-240"><ImageSlider slides={slides} contain /></div>
                </div>
            </div>
        </section>
    );
}

function Topics({ topics }) {
    return (
        <section id="year-topics" className="wrapper">
            <h2 className="whitespace-nowrap">出題介紹</h2>
            <ul className="grid gap-16">
                {topics.map((topic, index) => (
                    <li key={index}>
                        <Card className="place-items-center md:grid-flow-col md:grid-cols-[auto_1fr]" nue="sm">
                            <CardImg className="hidden md:block h-28 md:h-56 aspect-square" img={CompanyTemp} contain />
                            <CardContent title={topic.company}
                                         content={(topic.title ? `**主題**：${topic.title}\n` : "") + `**說明**：${topic.description}`}
                                         moreInfo={topic.pdf ? "查看 PDF" : ""} link={topic.pdf} />
                        </Card>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function Sponsors({ sponsors }) {
    return (
        <section id="year-sponsors" className="wrapper">
            <h2 className="whitespace-nowrap">贊助企業</h2>
            <div className="grid lg:grid-cols-2 gap-8">
                {sponsors.map((sponsor, index) => (
                    <ul key={index} className="grid auto-rows-min gap-2">
                        <h3>{sponsor.group}</h3>
                        <li className="flex flex-wrap">
                            {sponsor.companies.map((company, index) => (
                                <span key={index} className="whitespace-nowrap">
                                    {company}
                                    {(index !== sponsor.companies.length - 1) && "、"}
                                </span>
                            ))}
                        </li>
                    </ul>
                ))}
            </div>
        </section>
    );
}

function Staffs({ staffs, params }) {
    const [logo, setLogo] = useState(null);

    useEffect(() => {
        async function fetchLogo(year) {
            const parsedYear = parseInt(year, 10);
            try {
                let imgModule;
                if (parsedYear < 2021) {
                    imgModule = await import(`/public/img/about/logo/${parsedYear}.webp`);
                } else {
                    imgModule = await import(`/public/img/about/logo/${parsedYear}.svg`);
                }
                setLogo(imgModule.default);
            } catch (error) {
                console.error("Failed to load banner image", error);
                setLogo(DefaultBanner);
            }
        }

        fetchLogo(params.year);
    }, [params.year]);

    return (
        <section id="year-staff" className="wrapper">
            <h2 className="whitespace-nowrap">工作人員</h2>
            {logo && (
                <div className="flex justify-between h-18 mb-8">
                    <Image
                        src={logo}
                        alt={"Logo of " + params.year}
                        className="w-min object-contain rounded-lg"
                        quality={100}
                        priority
                    />
                </div>
            )}
            <div className="grid lg:grid-cols-2 gap-8">
                {staffs.map((staff, index) => (
                    <ul key={index} className="grid auto-rows-min gap-2">
                        <h3>{staff.dept}</h3>
                        <li className="flex flex-wrap">
                            {staff.members.map((member, index) => (
                                <span key={index} className="whitespace-nowrap">
                                    {member}
                                    {(index !== staff.members.length - 1) && "\u00A0/\u00A0"}
                                </span>
                            ))}
                        </li>
                    </ul>
                ))}
            </div>
        </section>
    );
}