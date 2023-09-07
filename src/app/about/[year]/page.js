"use client";
import useSWR from "swr";
import { Load, LoadCustom } from "../../components/gadgets"
import { SYMBOL_CLEARED_COOKIES } from "next/dist/server/api-utils";
import { Year_2019, Year_2020, Year_2021, Year_2022} from "../../components/Memory/Year.js";

// TODO: Stuck in "Loading" instaed of "Failed" when data doesn't exist
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function YearPage({ params }) {
    const { data, error } = useSWR(params.year ? `/api/about/${params.year}` : null, fetcher);
	if(error) return <LoadCustom msg={"Failed to load or event of the year does not exist!"}/>;
	if(!data) return <Load />;
    return (
        <div>
            { data.year === 2019 && <Year_2019/> }
            { data.year === 2020 && <Year_2020/> }
            { data.year === 2021 && <Year_2021/> }
            { data.year === 2022 && <Year_2022/> }
        </div>
    );
    
}