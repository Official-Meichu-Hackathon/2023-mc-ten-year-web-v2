"use client";
import { useState } from "react";
import { Load, LoadFailed } from "../components/gadgets";
import Filter, { generateInitialState } from "@/app/components/filter/filter";
import Qcard from "@/app/components/QApage/qcard";
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
        category: "屬性",
        names: ["2022", "創客組", "競賽內容", "報名相關", "其他"],
    }
];

export default function Qnapage() {
    return (
        <div className="grid grid-rows-[auto_1fr]">
            <header className="mb-4">
                <h1 className="bracket-md justify-center">常見問題</h1>
			</header>
			<main>
                <QuestionList />
            </main>
        </div>
    );
}

function QuestionList() {
    const width = useRecoilValue(windowWidth);
    const [currentPage, setCurrentPage] = useState(1);
    const [checkboxStates, setCheckboxStates] = useState(() => generateInitialState(checkboxes));

    const { data, error } = useSWR("/api/qna", fetcher);
	if (error) return <LoadFailed />;
	if (!data) return <Load />;



    function filterQuestions(que) {
        for (let checkboxGroup of checkboxes) {
            const { category, names } = checkboxGroup;
    
            let checkedNames = names.filter(name => checkboxStates[category][name]);
            
            if (checkedNames.length > 0) {
                // If there are checked checkboxes in this category, check if the question matches any of them
                let matchesCheckboxInCategory = checkedNames.some(name => {
                    switch (category) {
                        case checkboxes[0].category:
                            return que.tags.includes(name);
                        
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

	const filteredQuestions = data.filter(question => filterQuestions(question));
    const itemsPerPage = 6;
    const totalItems = filteredQuestions.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    const questionSubset = filteredQuestions.slice(startIndex, endIndex);
    const questionList = (width >= breakpointMD) ? questionSubset : data;

	return (
		<div>
			<Filter id="qna-filter" checkboxes={checkboxes} checkboxStates={checkboxStates} setCheckboxStates={setCheckboxStates}  />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 py-16 justify-items-center place-items-stretch">
                {questionList.map((question, index) => (
                    <Qcard key={index} data={question} />
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