import { NextResponse } from "next/server";

export function middleware(req) {
    const customHeader = req.headers.get("X-Api-Header");

    // A very simple "authorization" to prevent external API access.
    // Our data is not that worthy after all.
    if (customHeader !== "2023_mc_ten_year_web") {
        return NextResponse.redirect(new URL("/not-found", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/api/:path*"],
}