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
        brand: {
          navy: "#0E2A47",
          "navy-dark": "#071524",
          orange: "#E86024",
          "orange-hover": "#D04F18",
          light: "#F8FAFC",
          "light-blue": "#F0F4F8",
        },
      },
      borderRadius: {
        // Enforcing uniform 18px border radius across all cards & containers
        'brand': '18px',
      },
      maxWidth: {
        'brand': '1380px',
      },
      boxShadow: {
        'brand-soft': '0 10px 30px -10px rgba(14, 42, 71, 0.08)',
        'brand-hover': '0 20px 40px -15px rgba(232, 96, 36, 0.12)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
      },
      spacing: {
        'section-sm': '100px',
        'section-lg': '140px',
      }
    },
  },
  plugins: [],
};
export default config;