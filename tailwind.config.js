/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Core surfaces
        ink: "#0a0a0c", // primary page background
        panel: "#141417", // slightly lifted section / card background
        line: "rgba(245, 242, 236, 0.1)", // hairline borders
        line2: "rgba(245, 242, 236, 0.16)",
        cream: "#f5f2ec", // primary text on dark
        muted: "#a7a49e", // secondary text
        // Brand accent
        amber: {
          DEFAULT: "#dfa050",
          light: "#e9bc82",
          dark: "#b97f39",
        },
        onAmber: "#171310",
      },
      fontFamily: {
        display: ["Oswald", "Arial Narrow", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
