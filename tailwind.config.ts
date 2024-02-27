import type { Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["dark"],
    styled: true,
  },
  safelist: [
    "text-pink-500",
    "group-hover:text-pink-500",
    "text-green-500",
    "group-hover:text-green-500",
    "text-red-500",
    "group-hover:text-red-500",
    "text-blue-500",
    "group-hover:text-blue-500",
    "text-purple-500",
    "group-hover:text-purple-500",
    "items-center",
    "text-roxo",
  ],
  theme: {
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
        roxoUnderline: "0 3px #590b55",
      },
      colors: {
        laranja: {
          DEFAULT: "#d95000",
          hover: "#c04600",
        },
        roxo: {
          DEFAULT: "#590B55",
          hover: "#4c0a49",
        },
        amarelo: {
          DEFAULT: "#FFC900",
          // hover: "#b28600",
        },
        semiwhite: {
          DEFAULT: "#ffffff75",
        },
      },
      screens: {
        tall: { raw: "(min-height: 800px)" },
      },
    },
    fontFamily: {
      heading: ["var(--font-gotham)"],
      body: ["var(--font-poppins)"],
      category: ["var(--font-bebas)"],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  plugins: [require("daisyui")],
};
export default config;
