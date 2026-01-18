import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B1A1A",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#C9A961",
          foreground: "#000000",
        },
        background: {
          DEFAULT: "#F5F0E8",
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#5A1A3E",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
