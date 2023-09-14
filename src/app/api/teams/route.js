import path from "path";
import { promises as fs } from 'fs';
import { NextResponse } from "next/server";

const jsonURL = path.join(process.cwd(), "src/app/json/teams.json");

export async function fetchJSON() {
    const data = await fs.readFile(jsonURL, "utf-8");
    return JSON.parse(data);
}

async function fetchTeamList() {
    const data = await fetchJSON();
    // const teams = data.teams.map(t => ({question: t.question,
    //                                     tags: t.tags,
    //                                     answers: t.answers}));
    return data.teams;
}

export async function GET(request) {
    const data = await fetchTeamList();
    return NextResponse.json(data);
}