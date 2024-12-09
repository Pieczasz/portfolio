import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: "selector",
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      animation: {
        fade: "fadeIn .5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      colors: {
        background: {
          DEFAULT: "white",
          dark: "#0A0A0A",
        },
        foreground: {
          DEFAULT: "#0A0A0A",
          dark: "#FAFAFA",
        },
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#737373",
          dark: "#1A1A1A",
          "dark-foreground": "#A3A3A3",
        },
        border: {
          DEFAULT: "#E5E5E5",
          dark: "#262626",
        },
        primary: {
          DEFAULT: "#0070F3",
          foreground: "#FFFFFF",
          dark: "#0070F3",
          "dark-foreground": "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F5F5F5",
          foreground: "#0A0A0A",
          dark: "#1A1A1A",
          "dark-foreground": "#FAFAFA",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
