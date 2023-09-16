"use client";
import { useState } from "react";
import { Load, LoadFailed } from "@/app/components/gadgets";
import Filter, { generateInitialState } from "@/app/components/filter/filter";
import Tcard from "@/app/components/teampage/tcard";
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
        names: ["冠軍", "亞軍", "季軍"]
    },
];

export default function Teams() {
    return (
		<div className="wrapper grid-rows-[auto_1fr] my-16 md:my-10">
			<header className="mb-4">
                <h1 className="bracket-md justify-center">歷年作品</h1>
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
    const [checkboxStates, setCheckboxStates] = useState(() => generateInitialState(checkboxes));

    const { data, error } = useSWR("/api/teams", fetcher);
	if (error) return <LoadFailed />;
	if (!data) return <Load />;


    
    function filterTeams(team) {
        for (let checkboxGroup of checkboxes) {
            const { category, names } = checkboxGroup;
    
            let checkedNames = names.filter(name => checkboxStates[category][name]);
            
            if (checkedNames.length > 0) {
                // If there are checked checkboxes in this category, check if the team matches any of them
                let matchesCheckboxInCategory = checkedNames.some(name => {
                    switch (category) {
                        case checkboxes[0].category:
                            return team.year === name;
                        
                        case checkboxes[1].category:
                            return team.group === name;
                        
                        case checkboxes[2].category:
                            return team.awards.includes(name);
                        
                        default:
                            return false;
                    }
                });
    
                if (!matchesCheckboxInCategory) {
                    return false;
                }
            }
        }

        // All false returns all data
        return true;    
    }

    const filteredTeams = data.filter(team => filterTeams(team));
    const itemsPerPage = 6;
    const totalItems = filteredTeams.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    const teamSubset = filteredTeams.slice(startIndex, endIndex);
    const teamList = (width >= breakpointMD) ? teamSubset : data;

	return (
		<div className="mb-16 md:mb-10">
			<Filter id="team-filter" checkboxes={checkboxes} hasSearch={true} hasSubmit={true}
                    checkboxStates={checkboxStates} setCheckboxStates={setCheckboxStates} />

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