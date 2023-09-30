/** @type {import('tailwindcss').Config} */
module.exports = {
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
      gridTemplateRows: {
        splash: "25% 1fr 25%",
      },
      colors: {
        ctblue: {
          DEFAULT: "#3e8fa9",
          100: "#0c1c22",
          200: "#193843",
          300: "#255565",
          400: "#327186",
          500: "#3e8fa9",
          600: "#5ba9c2",
          700: "#84bed2",
          800: "#add4e1",
          900: "#d6e9f0",
        },
        ctyellow: {
          DEFAULT: "#ffbe00",
          100: "#332600",
          200: "#664d00",
          300: "#997300",
          400: "#cc9900",
          500: "#ffbe00",
          600: "#ffcc33",
          700: "#ffd966",
          800: "#ffe699",
          900: "#fff2cc",
        },
        ctred: {
          DEFAULT: "#ef767a",
          100: "#400709",
          200: "#800f13",
          300: "#c0161c",
          400: "#e7363c",
          500: "#ef767a",
          600: "#f29195",
          700: "#f5adaf",
          800: "#f9c8ca",
          900: "#fce4e4",
        },
        border: "hsl(var(--border))",
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
          DEFAULT: "#e7363c",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
