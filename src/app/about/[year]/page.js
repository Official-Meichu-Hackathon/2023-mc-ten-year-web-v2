"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import DefaultBanner from "/public/img/banner/default.webp"

// useSWR
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { Load, LoadFailed, LoadCustom } from "../../components/gadgets"



export default function YearPage({ params }) {
    const [bannerImg, setBannerImg] = useState(null);

    useEffect(() => {
        async function fetchBannerImg(year) {
            const parsedYear = parseInt(year, 10);
            if (Number.isInteger(parsedYear)) {
                try {
                    const imgModule = await import(`/public/img/banner/${parsedYear}.webp`);
                    setBannerImg(imgModule.default);
                } catch (error) {
                    console.error("Failed to load banner image", error);
                    setBannerImg(DefaultBanner);
                }
            }
        }

        fetchBannerImg(params.year);
    }, [params.year]);

    const { data, error, isLoading } = useSWR(params.year ? `/api/about/${params.year}` : null, fetcher);
	if(error) return <LoadFailed />;
	if(isLoading) return <Load />;
    if(data && data.notFound) return <LoadCustom msg={`首位來自 ${params.year} 年的時空旅人出現了！`}/>;

    return (
        <div className="my-16 petite:my-16 md:my-10">
            <header className="pt-2 md:pt-0 mb-4">
                {bannerImg && (
                    <div className="flex h-48 md:h-72 xl:h-96 overflow-hidden mb-8">
                        <Image
                            src={bannerImg}
                            alt={"Banner image of " + params.year}
                            className="w-screen object-cover"
                            quality={100}
                            priority
                        />
                    </div>
                )}
                <div className="wrapper">
                    <h1 className="bracket-md">{data.year} 梅竹黑客松</h1>
                </div>
            </header>
            <main className="wrapper">
                <article>
                    <section>
                        <p>
                            {data.description}
                        </p>
                    </section>
                </article>
            </main>
        </div>
    );
}