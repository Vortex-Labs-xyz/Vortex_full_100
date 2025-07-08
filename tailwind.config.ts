import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        bgSubtle: "hsl(var(--bg-subtle))",
        surface: "hsl(var(--surface))",
        card: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
        text: "hsl(var(--text))",
        textSub: "hsl(var(--text-sub))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          soft: "hsl(var(--accent-soft))",
          foreground: "hsl(var(--accent-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(20, 184, 166, 0.15)",
        card: "0 2px 8px rgba(0,0,0,0.08)",
        soft: "0 1px 3px rgba(0,0,0,0.04)",
        lift: "0 8px 24px rgba(0,0,0,0.12)",
        mock: "0 10px 32px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        "24": "24px",
        "32": "32px",
        card: "24px",
        pill: "48px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        sectionY: "8rem",
        container: "clamp(1.5rem, 5vw, 6rem)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
}

export default config
