import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        navy: {
          DEFAULT: "#1F4E78",
          dark: "#163959",
          light: "#2a6099"
        },
        emerald: {
          DEFAULT: "#2ECC71",
          dark: "#27AE60",
          light: "#52d98a"
        },
        gold: {
          DEFAULT: "#F39C12",
          dark: "#D68910",
          light: "#f5b041"
        },
        steel: {
          DEFAULT: "#4682B4",
          dark: "#366891",
          darker: "#2d5a7a",
          light: "#6a9bc4",
          50: "#eef4fa",
          100: "#dce8f3",
          200: "#b8cfe0",
          300: "#8fb3d1",
          400: "#5a96c2",
          500: "#4682B4",
          600: "#3a6d96",
          700: "#366891",
          800: "#2d5a7a"
        },
        ink: "#1a1a2e",
        cream: "#fafaf8",
        mist: "#f0f4f8"
      },
      boxShadow: {
        card: "0 20px 60px rgba(31, 78, 120, 0.1)",
        glow: "0 0 40px rgba(46, 204, 113, 0.25)",
        "gold-glow": "0 14px 40px rgba(243, 156, 18, 0.35)"
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
        marquee: "marquee 28s linear infinite"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
