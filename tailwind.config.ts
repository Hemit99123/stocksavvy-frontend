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
