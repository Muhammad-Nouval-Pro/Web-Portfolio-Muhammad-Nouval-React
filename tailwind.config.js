/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)"
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,.08)" }
    }
  },
  plugins: []
}
