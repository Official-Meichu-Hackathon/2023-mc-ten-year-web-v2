import { NextResponse } from "next/server";

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const customHeader = request.headers.get("X-Api-Header");

    // A very simple "authentication" to prevent external API access.
    // Our data is not that worthy after all.
    if (pathname.startsWith("/api") && customHeader !== "2023_mc_ten_year_web") {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|fonts|examples|svg|[\\w-]+\\.\\w+).*)'],
}