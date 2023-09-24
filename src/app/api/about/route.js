import path from "path";
import { promises as fs } from 'fs';
import { NextResponse } from "next/server";

const baseURL = path.join(process.cwd(), "src/app/json/about/");
const listURL = path.join(process.cwd(), "src/app/json/about/list.json");

export function validateAndParseID(year) {
    const parsedYear = parseInt(year, 10);
    if (year === parsedYear.toString() && Number.isInteger(parsedYear)) {
        return parsedYear;
    }

    return false;
}

export async function fetchJSON(url) {
    const data = await fs.readFile(url, "utf-8");
    return JSON.parse(data);
}

export async function fetchYearData(year) {
    const parsedYear = validateAndParseID(year);
    if (parsedYear === false) {
        return { invalid: true };
    }

    let data;
    try {
        data = await fetchJSON(`${baseURL}${year}.json`);
    } catch (error) {
        console.log("Failed fetching year data:", error);
        return { notFound: true };
    }
    return data;
}

async function fetchYearList() {
    const data = await fetchJSON(listURL);
    const yearList = data.years.sort((a, b) => b.year - a.year);
    return yearList;
}

export async function GET(req) {
    const data = await fetchYearList();
    return NextResponse.json(data);
}