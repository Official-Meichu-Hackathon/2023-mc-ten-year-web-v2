"use client";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { Load, LoadFailed } from "../components/gadgets"

export default function Qna() {
    const { data, error, isLoading } = useSWR("/api/qna", fetcher);
    if(error) return <LoadFailed />;
	if(isLoading) return <Load />;

    return (
        <div>
            <header>
                <h1 className="bracket-md">Q & A</h1>
            </header>
            <main>
                <ul className="grid gap-20">
                    {data.map((q, index) => (
                        <li key={index} className="grid gap-y-8 nue-concave frost-25 p-12 rounded-[4rem]">
                            <h2 className="text-primary-gradient">Q: {q.question}</h2>
                            <div className="grid gap-y-4">
                                <ul className="flex list-none">
                                    {q.tags.map((tag, index) => (
                                        <li key={index} className={`${(index !== q.tags.length - 1) ? "mr-3" : ""} p-1 rounded-[0.375em] capitalize bg-secondary`}>
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                                {q.answers.map((answer, index) => (
                                    <p key={index}>
                                        {answer}
                                    </p>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}