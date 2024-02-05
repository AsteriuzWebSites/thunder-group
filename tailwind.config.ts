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
  safelist: ["backdrop-blur-md"],
  theme: {
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
        underline: "0 3px tomato",
      },
      colors: {
        laranja: {
          DEFAULT: "#d95000",
          hover: "#c04600",
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
