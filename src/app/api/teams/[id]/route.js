import { NextResponse } from "next/server";
import { fetchTeamData } from "../route";

export async function GET(request, { params }) {
    const data = await fetchTeamData(params.id);
    return NextResponse.json(data);
}