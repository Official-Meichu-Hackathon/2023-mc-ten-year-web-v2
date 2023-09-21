import path from "path";
import { promises as fs } from 'fs';
import { NextResponse } from "next/server";

const jsonURL = path.join(process.cwd(), "src/app/json/qna.json");

export async function fetchJSON() {
    const data = await fs.readFile(jsonURL, "utf-8");
    return JSON.parse(data);
}

async function fetchQuestions() {
    const data = await fetchJSON();
    return data.questions;
}

export async function GET(request) {
    const data = await fetchQuestions();
    return NextResponse.json(data);
}