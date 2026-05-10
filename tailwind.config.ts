import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: "#174f36",
        leaf: "#2d8a25",
        teal: "#075e63",
        gold: "#b88920",
        ink: "#18231d",
        cream: "#fff9ec",
        mist: "#edf7ef"
      },
      boxShadow: {
        soft: "0 22px 60px rgba(23, 79, 54, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
