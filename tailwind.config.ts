import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["dark"],
    styled: false,
  },
  theme: {
    extend: {
      colors: {
        laranja: {
          DEFAULT: "#d95000",
          hover: "#c04600",
        },
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
