// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
    "node_modules/preline/dist/*.js",
  ],
  darkMode: "class", // 👈 keep only "class"
  important: true,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "1rem",
        xl: "3rem",
        "2xl": "8rem",
      },
    },
    fontFamily: {
      dm: ['"DM Sans", sans-serif'],
    },
    extend: {
      colors: {
        primary: "#5d87ff",
        primaryDark: "#2a5ceb",
        secondary: "#191A15",
        dark: "#212121",
        light: "#747474",
        black: "#000000",
        muted: "#707070",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-slower': 'float-slower 12s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        'float-slow': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(180deg)' 
          },
        },
        'float-slower': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '50%': { 
            transform: 'translateY(10px) rotate(90deg)' 
          },
        },
        'pulse-slow': {
          '0%, 100%': { 
            opacity: '0.5',
            transform: 'scale(1)' 
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.1)' 
          },
        },
      },
      spacing: {
        0.75: "0.1875rem",
        3.25: "0.8125rem",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        999: "999",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("preline/plugin"),
  ],
};

export default config;