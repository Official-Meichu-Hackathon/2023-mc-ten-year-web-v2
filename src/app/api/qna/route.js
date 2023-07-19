import path from "path";
import { promises as fs } from 'fs';
import { NextResponse } from "next/server";

const jsonURL = path.join(process.cwd(), "src/app/json/qna.json");

export async function fetchJSON() {
    const data = await fs.readFile(jsonURL, "utf-8");
    return JSON.parse(data);
}

async function fetchQuestionList() {
    const data = await fetchJSON();
    const questions = data.questions.map(q => ({question: q.question,
                                                tags: q.tags,
                                                answers: q.answers}));
    return JSON.stringify(questions);
}

export async function GET(request) {
    const data = await fetchQuestionList();
    return NextResponse.json(JSON.parse(data));
}