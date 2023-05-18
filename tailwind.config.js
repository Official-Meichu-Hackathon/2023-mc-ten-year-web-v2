/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
    darkMode: "class",
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
            spacing: {
                '18': '4.5rem',
            },
			scale: {
				125: "1.25",
				175: "1.75",
				200: "2",
                300: "3",
			},
			skew: {
				30: "30deg",
				60: "60deg",
			},
			zIndex: {
				1: "1",
				2: "2",
			},
            transitionTimingFunction: {
                "in-quint": "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                "out-quint": "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
            },
		},
	},
	plugins: [],
};
