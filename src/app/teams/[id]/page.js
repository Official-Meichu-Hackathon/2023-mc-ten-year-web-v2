"use client";
import { TeamTitle } from "@/app/components/teampage/team/teamTitle";
import { ImageSlider } from "@/app/components/teampage/team/imageSlider";
import { CommentBoard } from "@/app/components/teampage/team/commentBoard";

import NeneImg from "../../../../public/img/Ref.jpg"

// useSWR
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { Load, LoadFailed, LoadCustom } from "../../components/gadgets"



export default function Teampage({ params }) {
    // TODO: Pass in actual imgs
    const slides = [{img: NeneImg}, {img: NeneImg}];

    const { data, error, isLoading } = useSWR(params.id ? `/api/teams/${params.id}` : null, fetcher);
	if(error) return <LoadFailed />;
	if(isLoading) return <Load />;
    if(data && data.notFound) return <LoadCustom msg={`${params.id} 是哪一組 ?`}/>;

    return (
        <div className="mt-16 md:mt-0 bg-primary">
			<header>
				<div className="md:hidden w-full h-fit bg-secondary">
                    <ImageSlider slides={slides} />
				</div>
				
				<TeamTitle title={data.title} year={data.year} group={data.group}
                           names={data.names} mail={data.mail} github={data.github}
                           tags={data.tags} awards={data.awards} view={data.view} msg={data.comments.length} />
			</header>
            <main>
                <div className="wrapper">
                    <article className="grid gap-y-18 py-12">
                        <section className="wrapper-section">
                            <h2 className="whitespace-nowrap">隊伍敘述</h2>
                            <div>
                                {data.descriptions.map((descrip, index) => (
                                    <p key={index} className="whitespace-pre-line">{descrip}</p>
                                ))}
                            </div>
                        </section>
                        
                        <section className="hidden md:block w-full h-fit">
                            <div className="wrapper-section">
                                <h2 className="whitespace-nowrap">隊伍簡報</h2>
                                <ImageSlider slides={slides} />
                            </div>
                        </section>
                    </article>
                </div>
                <div className="md:w-[min(100vw_-_6rem,_1400px)] mx-auto pt-8 mt-[3rem]">
                    <CommentBoard comments={data.comments} />
                </div>
            </main>
		</div>
    );
}