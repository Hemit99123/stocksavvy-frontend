import type { Config } from "tailwindcss";

export default {
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
        green: {
          100: "#D4EDE0", // Lightest shade
          200: "#A9D9C1",
          300: "#7EC5A2",
          400: "#54B083",
          500: "#286A4D", // Base primary green
          600: "#257954",
          700: "#2A723B",
          800: "#1E5A3A",
          900: "#153D25"  // Darkest shade
        },
      },
      fontSize: {
        '10xl': ['clamp(4rem, 15vw, 18rem)', { lineHeight: '1.1' }], // Starts at 4rem, grows with screen size, maxes at 18rem
      },
      fontFamily: {
        custom: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
