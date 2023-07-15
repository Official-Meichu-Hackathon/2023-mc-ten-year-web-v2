"use client";
import useSWR from "swr";
import { Load, LoadCustom } from "../../components/gadgets"

// TODO: Breaks main grid layout when loading
// TODO: Stuck in "Loading" instaed of "Failed" when data doesn't exist
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function YearPage({ params }) {
    const { data, error } = useSWR(params.year ? `/api/about/${params.year}` : null, fetcher);
	if(error) return <LoadCustom msg={"Failed to load or event of the year does not exist!"}/>;
	if(!data) return <Load />;

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