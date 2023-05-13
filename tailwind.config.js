/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			"2xl": "1400px",
		},
		extend: {
			screens: {
				tall: { raw: "(min-height: 800px)" },
				// => @media (min-height: 800px) { ... }
			},
			scale: {
				125: "1.25",
				175: "1.75",
				200: "2",
			},
			skew: {
				30: "30deg",
				60: "60deg",
			},
			zIndex: {
				1: "1",
				2: "2",
			},
		},
	},
	plugins: [],
};
