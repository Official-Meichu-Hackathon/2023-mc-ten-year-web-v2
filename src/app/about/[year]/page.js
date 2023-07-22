"use client";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { Load, LoadFailed, LoadCustom } from "../../utils/gadgets"

// TODO: Stuck in "Loading" instaed of "Failed" when data doesn't exist
export default function YearPage({ params }) {
    const { data, error, isLoading } = useSWR(params.year ? `/api/about/${params.year}` : null, fetcher);
	if(error) return <LoadFailed />;
	if(isLoading) return <Load />;
    if(data && data.notFound) return <LoadCustom msg={`首位來自 ${params.year} 年的時空旅人出現了！`}/>;

    return (
        <div>
            <header>
                <h1 className="bracket-md">{data.year} 梅竹黑客松</h1>
            </header>
            <main>
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