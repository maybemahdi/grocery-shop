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
        text: "#212337",
        para: "#4A4A52",
        orange: "#FF6A1A",
        green: "#176D38",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        questrial: ["Questrial", "sans-serif"],
      },
      rotate: {
        "-69": "-69.304deg", // Add your custom rotation value here
      },
    },
  },
  plugins: [],
} satisfies Config;
