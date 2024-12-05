import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#749B3F",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        questrial: ["Questrial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
