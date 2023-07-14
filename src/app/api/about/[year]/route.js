import { NextResponse } from "next/server";
import { fetchYearData } from "../route"

export async function GET(request, { params }) {
    const data = await fetchYearData(params.year);
    return NextResponse.json(JSON.parse(data));
}