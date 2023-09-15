"use client";
import { Fragment } from "react";
import { TeamTitle } from "@/app/components/teampage/team/teamTitle";
import { ImageSlider } from "@/app/components/teampage/team/imageSlider";
import { CommentBoard } from "@/app/components/teampage/team/commentBoard";

// Recoil
import { useRecoilWindowWidth } from "@/app/utils/useExternal";

// useSWR
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { Load, LoadFailed, LoadCustom } from "../../components/gadgets"
import { RecoilRoot } from "recoil";



export default function RecoilTeampage({ params }) {
    return (
        <RecoilRoot>
            <Teampage params={params} />
        </RecoilRoot>
    );
}

function Teampage({ params }) {
    useRecoilWindowWidth();

    const { data, error, isLoading } = useSWR(params.id ? `/api/teams/${params.id}` : null, fetcher);
	if(error) return <LoadFailed />;
	if(isLoading) return <Load />;
    if(data && data.notFound) return <LoadCustom msg={`${params.id} 是哪一組 ?`}/>;

    return (
        <div className="mt-16 md:mt-0 bg-primary">
			<header>
				<div className="md:hidden w-full h-fit bg-secondary">
                    <ImageSlider />
				</div>
				
				<TeamTitle title={data.title} year={data.year} group={data.group}
                           names={data.names} mail={data.mail} github={data.github}
                           tags={data.tags} awards={data.awards} view={data.view} msg={data.msg} />
			</header>
            <main>
                <div className="wrapper">
                    <article className="grid gap-y-18 py-12">
                        <section className="wrapper-section">
                            <h2 className="whitespace-nowrap">隊伍敘述</h2>
                            <div>
                                {data.descriptions.map((descrip, index) => (
                                    <Fragment key={index}>
                                        <p>{descrip}</p>
                                        {index !== data.descriptions.length - 1 && <br />}
                                    </Fragment>
                                ))}
                            </div>
                        </section>
                        <section className="hidden md:block w-full h-fit">
                            <ImageSlider />
                        </section>
                    </article>
                    
                    <div className="pt-4 mt-[3rem]">
                        <CommentBoard comments={data.comments} />
                    </div>
                </div>
            </main>
		</div>
    );
}