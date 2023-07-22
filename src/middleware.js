import { NextResponse } from "next/server";

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const customHeader = request.headers.get("X-Api-Header");

    if (pathname.startsWith("/api") && customHeader !== "2023_mc_ten_year_web") {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|fonts|examples|svg|[\\w-]+\\.\\w+).*)'],
}