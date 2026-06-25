import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      // Slightly larger, more readable type scale (base 17px instead of 16px).
      // Small sizes are bumped the most so nothing reads tiny.
      fontSize: {
        xs: ["0.8125rem", "1.5"],   // 13px
        sm: ["0.9375rem", "1.5"],   // 15px
        base: ["1.0625rem", "1.65"], // 17px
        lg: ["1.1875rem", "1.6"],   // 19px
        xl: ["1.3125rem", "1.55"],  // 21px
        "2xl": ["1.625rem", "1.35"], // 26px
        "3xl": ["2rem", "1.2"],      // 32px
        "4xl": ["2.5rem", "1.1"],    // 40px
        "5xl": ["3.25rem", "1.05"],  // 52px
      },
      colors: {
        brand: {
          DEFAULT: "#0E2A47",
          light: "#1B3E66",
          accent: "#D4AF37"
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
} satisfies Config
