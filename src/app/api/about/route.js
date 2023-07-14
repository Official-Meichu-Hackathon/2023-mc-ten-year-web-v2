import path from "path";
import { promises as fs } from 'fs';
import { NextResponse } from "next/server";

const jsonURL = path.join(process.cwd(), "src/app/json/year.json");

function isValidYear(year) {
    if(Number.isInteger(parseInt(year, 10))) {
        return true;
    }

    return false;
}

export async function fetchJSON() {
    const data = await fs.readFile(jsonURL, "utf-8");
    return JSON.parse(data);
}

export async function fetchYearData(year) {
    if(!isValidYear(year)) {
        return null;
    }

    const data = await fetchJSON();
    const yearData = data.years.find(y => y.year == year);
    return yearData ? JSON.stringify(yearData) : null;
}

async function fetchYearList() {
    const data = await fetchJSON();
    const years = data.years.map(item => ({year: item.year, description: item.description}));
    const yearList = years.sort((a, b) => b.year - a.year);
    return JSON.stringify(yearList);
}

export async function GET(request) {
    const data = await fetchYearList();
    return NextResponse.json(JSON.parse(data));
}