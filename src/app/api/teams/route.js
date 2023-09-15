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
    const teams = data.teams.map(t => ({id: t.id,
                                        title: t.title,
                                        img: t.img,
                                        year: t.year,
                                        group: t.group,
                                        tags: t.tags,
                                        awards: t.awards,
                                        descriptions: t.descriptions,
                                    }));

    return teams;
}

export async function fetchTeamData(id) {
    const data = await fetchJSON();
    const teamData = data.teams.find(t => t.id == id);

    return teamData ? teamData : { notFound: true };
}

export async function GET(request) {
    const data = await fetchTeamList();
    return NextResponse.json(data);
}