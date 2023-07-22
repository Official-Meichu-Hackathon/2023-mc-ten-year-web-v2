"use client";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { Load, LoadCustom } from "../../utils/gadgets"

// TODO: Stuck in "Loading" instaed of "Failed" when data doesn't exist
export default function YearPage({ params }) {
    const { data, error, isLoading } = useSWR(params.year ? `/api/about/${params.year}` : null, fetcher);
	if(error) return <LoadCustom msg={"Failed to load or event of the year does not exist!"}/>;
	if(isLoading) return <Load />;

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