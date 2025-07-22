import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1E1E3F",
        secondary: "#2D2D5F",
        accent: "#FF7A00",
        purple: "#4C9AFF",
        darkBlue: "#011627",
        lightGray: "#607B96",
        "dark-blue": "#011627",
        "light-gray": "#607B96",
        "gradient-start": "#121626",
        "gradient-end": "#42518C",
      },
      fontFamily: {
        sans: ['var(--font-fira-code)', 'Fira Code', 'monospace'],
        mono: ['var(--font-fira-code)', 'Fira Code', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
