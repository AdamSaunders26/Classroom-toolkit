import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

// { 'blue_(munsell)': { DEFAULT: '#3e8fa9', 100: '#0c1c22', 200: '#193843', 300: '#255565', 400: '#327186', 500: '#3e8fa9', 600: '#5ba9c2', 700: '#84bed2', 800: '#add4e1', 900: '#d6e9f0' }, 'amber': { DEFAULT: '#ffbe00', 100: '#332600', 200: '#664d00', 300: '#997300', 400: '#cc9900', 500: '#ffbe00', 600: '#ffcc33', 700: '#ffd966', 800: '#ffe699', 900: '#fff2cc' }, 'light_coral': { DEFAULT: '#ef767a', 100: '#400709', 200: '#800f13', 300: '#c0161c', 400: '#e7363c', 500: '#ef767a', 600: '#f29195', 700: '#f5adaf', 800: '#f9c8ca', 900: '#fce4e4' }, 'turquoise': { DEFAULT: '#49dcb1', 100: '#093125', 200: '#13624a', 300: '#1c936f', 400: '#25c394', 500: '#49dcb1', 600: '#6ce3bf', 700: '#90eacf', 800: '#b5f1df', 900: '#daf8ef' }, 'emerald': { DEFAULT: '#00cc66', 100: '#002914', 200: '#005229', 300: '#007a3d', 400: '#00a352', 500: '#00cc66', 600: '#0aff85', 700: '#47ffa3', 800: '#85ffc2', 900: '#c2ffe0' } }
