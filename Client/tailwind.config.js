/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	daisyui: {
		themes: [
			{
				jz: {
					primary: "#6e2618",

					secondary: "#a67e4a",

					accent: "#E79D1E",

					neutral: "#f3f4f6",

					"base-100": "#44403c",

					info: "#0074d8",

					success: "#78e660",

					warning: "#facc15",

					error: "#ef4444",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
