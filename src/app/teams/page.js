"use client";
import { useState } from "react";
import { Load, LoadFailed } from "@/app/components/gadgets";
import Tcard from "@/app/components/teampage/tcard";
import Filter from "@/app/components/filter/filter";
import Pagination from "@/app/components/pagination";

import refImg from "../../../public/img/Ref.jpg";

// Recoil
import { useRecoilWindowWidth } from "@/app/utils/useExternal";
import { RecoilRoot, useRecoilValue } from "recoil";
import { windowWidth } from "@/app/utils/atoms";
import { breakpointMD } from "@/app/utils/resolutions";

// useSWR
import useSWR from "swr";
import { fetcher } from "@/app/utils/fetcher";



const checkboxes = [
	{
        id: 0,
        category: "年份",
        names: [2021, 2022, 2023, 2024]
    },
	{
		id: 1,
		category: "組別",
		names: ["黑客組", "創客組", "交流組", "團體組", "創客交流組"],
	},
	{
        id: 2,
        category: "得獎作品",
        names: ["冠軍"]
    },
];

export default function RecoilTeampage() {
    return (
        <RecoilRoot>
            <Teampage />
        </RecoilRoot>
    );
}

function Teampage() {
    useRecoilWindowWidth();

	return (
		<div>
			<header className="mb-4">
				<div className="flex items-center justify-between">
					<h1 className="bracket-md justify-center">歷年作品</h1>
				</div>
			</header>
			<main>
                <TeamGrid />
			</main>
		</div>
	);
}

function TeamGrid() {
    const width = useRecoilValue(windowWidth);
    const [currentPage, setCurrentPage] = useState(1);

    const { data, error } = useSWR("/api/teams", fetcher);
	if (error) return <LoadFailed />;
	if (!data) return <Load />;
    
    const itemsPerPage = 6;
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const teamSubset = data.slice(startIndex, endIndex);

    const teamSrc = (width >= breakpointMD) ? teamSubset : data;

	return (
		<div>
			<Filter id="team-filter" checkboxes={checkboxes} hasSearch={true} hasSubmit={true} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 py-16 justify-items-center place-items-stretch">
				{teamSrc.map(item => (
                    <Tcard
                        key={item.id}
                        img={(item.img === "refImg" ? refImg : refImg)}
                        title={item.title}
                        contents={item.contents}
                    />
                ))}
            </div>

            <div className="hidden md:block mt-5">
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
		</div>
	);
}