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
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      colors: {
        brand: {
          // Ink black — matches the VV logo mark
          DEFAULT: "#14161B",
          light: "#23262E",
          ink: "#0C0D10",
          // Vegas crimson accents
          accent: "#E0342F",
          accentDark: "#B3221E",
          bright: "#FF6B5E",
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(12,13,16,0.07)",
        accent: "0 6px 20px rgba(224,52,47,0.35)",
        accentLg: "0 10px 32px rgba(224,52,47,0.45)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
} satisfies Config
