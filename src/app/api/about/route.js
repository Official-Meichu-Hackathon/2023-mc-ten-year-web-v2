import path from "path";
import { promises as fs } from 'fs';
import { NextResponse } from "next/server";

const jsonURL = path.join(process.cwd(), "src/app/json/year.json");

export function validateAndParseID(year) {
    const parsedYear = parseInt(year, 10);
    if (Number.isInteger(parsedYear)) {
        return parsedYear;
    }

    return false;
}

export async function fetchJSON() {
    const data = await fs.readFile(jsonURL, "utf-8");
    return JSON.parse(data);
}

export async function fetchYearData(year) {
    const parsedYear = validateAndParseID(year);
    if (parsedYear === false) {
        throw new Error("Invalid year");
    }

    const data = await fetchJSON();
    const yearData = data.years.find(y => y.year == year);
    return yearData ? yearData : { notFound: true };
}

async function fetchYearList() {
    const data = await fetchJSON();
    const years = data.years.map(item => ({year: item.year, description: item.description}));
    const yearList = years.sort((a, b) => b.year - a.year);
    return yearList;
}

export async function GET(request) {
    const data = await fetchYearList();
    return NextResponse.json(data);
}