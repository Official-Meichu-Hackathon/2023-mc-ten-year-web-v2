import { NextResponse } from "next/server";
import { fetchYearData } from "../route"

export async function GET(req, { params }) {
    const data = await fetchYearData(params.year);
    return NextResponse.json(data);
}