import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-hover": "rgb(var(--primary-hover) / <alpha-value>)",
        "primary-dark": "rgb(var(--primary-dark) / <alpha-value>)",
        "primary-light": "rgb(var(--primary-light) / <alpha-value>)",
        "primary-success": "rgb(var(--primary-success) / <alpha-value>)",
        "primary-china2bd": "rgb(var(--primary-china2bd) / <alpha-value>)",

        secondary: "rgb(var(--secondary) / <alpha-value>)",
        "secondary-foreground":
          "rgb(var(--secondary-foreground) / <alpha-value>)",

        muted: "rgb(var(--muted) / <alpha-value>)",
        "muted-foreground": "rgb(var(--muted-foreground) / <alpha-value>)",
        destructive: "rgb(var(--destructive) / <alpha-value>)",

        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",

        "site-light": "rgb(var(--site-light) / <alpha-value>)",
        "text-highlight": "rgb(var(--text-highlight) / <alpha-value>)",
        "bg-color": "rgb(var(--bg-color) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius)",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
