/** @type {import('next').NextConfig} */
const nextConfig = {
    // distDir: "build",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "farm66.staticflickr.com",
                port: "",
                pathname: "/65535/**"
            },
            {
                protocol: "https",
                hostname: "live.staticflickr.com",
                port: "",
                pathname: "/65535/**"
            }
        ]
    }
}

module.exports = nextConfig
