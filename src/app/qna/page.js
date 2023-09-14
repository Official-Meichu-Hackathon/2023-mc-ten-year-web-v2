"use client";
import { useState } from "react";
import { Load, LoadFailed } from "../components/gadgets";
import Qcard from "@/app/components/QApage/qcard";
import Filter from "@/app/components/filter/filter";
import Pagination from "@/app/components/pagination";

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
        category: "屬性",
        names: ["2022", "創客組", "競賽內容", "報名相關", "其他"],
    }
];

export default function RecoilQnapage() {
    return (
        <RecoilRoot>
            <Qnapage />
        </RecoilRoot>
    );
}

function Qnapage() {
    useRecoilWindowWidth();

    return (
        <div>
            <header className="mb-4">
				<div className="flex items-center justify-between">
					<h1 className="bracket-md justify-center">常見問題</h1>
				</div>
			</header>
			<main>
                <QuestionGrid />
            </main>
        </div>
    );
}

function QuestionGrid() {
    useRecoilWindowWidth();
    const width = useRecoilValue(windowWidth);
    const [currentPage, setCurrentPage] = useState(1);

    const { data, error } = useSWR("/api/qna", fetcher);
	if (error) return <LoadFailed />;
	if (!data) return <Load />;

	const itemsPerPage = 6;
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const questionSubset = data.slice(startIndex, endIndex);

    const questionSrc = (width >= breakpointMD) ? questionSubset : data;

	return (
		<div>
			<Filter id="qna-filter" checkboxes={checkboxes} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 py-16 justify-items-center place-items-stretch">
                {questionSrc.map((question, index) => (
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