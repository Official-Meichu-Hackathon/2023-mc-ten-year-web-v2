"use client";
import useSWR from "swr";
import { Load, LoadFailed } from "../components/gadgets"
import Questions from "@/app/components/QApage/Question";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Qna() {
    const { data, error } = useSWR("/api/qna", fetcher);
    if(error) return <LoadFailed />;
	if(!data) return <Load />;

    return (
        <div>
            <header className="flex justify-center">
                <h1 className="bracket-md text-center">常見問題<br/>Q & A</h1>
            </header>
            <main>
              <Questions data={data} />;
            </main>
        </div>
    );
}
