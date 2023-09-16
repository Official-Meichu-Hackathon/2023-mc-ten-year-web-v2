"use client";
import { useState } from "react";
import { Load, LoadFailed } from "@/app/components/gadgets";
import Tcard from "@/app/components/teampage/tcard";
import Filter from "@/app/components/filter/filter";
import Pagination from "@/app/components/pagination";

// Recoil
import { useRecoilValue } from "recoil";
import { windowWidth } from "@/app/utils/recoilProvider";
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

export default function Teams() {
    return (
		<div className="wrapper my-16 md:my-10">
			<header className="mb-4">
				<div className="flex items-center justify-between">
					<h1 className="bracket-md justify-center">歷年作品</h1>
				</div>
			</header>
			<main>
                <TeamList />
			</main>
		</div>
	);
}

function TeamList() {
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

    const teamList = (width >= breakpointMD) ? teamSubset : data;

	return (
		<div className="mb-16 md:mb-10">
			<Filter id="team-filter" checkboxes={checkboxes} hasSearch={true} hasSubmit={true} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 py-16 justify-items-center place-items-stretch">
				{teamList.map(team => (
                    <Tcard key={team.id} data={team} />
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