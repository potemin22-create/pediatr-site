import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          50: "#f0faf6",
          100: "#dcf2e9",
          200: "#bbe5d4",
          300: "#8dd1b7",
          400: "#59b593",
          500: "#4CAF8B",
          600: "#2f8a68",
          700: "#266f55",
          800: "#205845",
          900: "#1b4939",
        },
        sky: {
          soft: "#E8F4FD",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
