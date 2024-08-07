import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  important: true,
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    boxShadow: {
      "card": "0px 2px 5px 2px #BECCFF",
      "datatable": "0px 2px 12px 0px #B0B8D3, 0px 2px 4px 0px #ACBCF5"
    },
    extend: {
      colors: {
        light: {
          1: "#FFFFFF",
          2: "#F5F6F6",
          3: "#EFFAFF",
          4: "#D0D1D1",
        },
        dark: {
          1: "#000000",
          2: "#3C3D3D",
          3: "#6B6D6F",
          4: "#E6E7E7",
          5: "#AFB0B1",
          6: "#363637",
          7: "#DBDBDC"
        },
        blue: {
          1: "#01A3E0",
          2: "#04334D",
        },
        green: {
          1: "#CEFDE3",
          2: "#03BE7A",
          3: "#00A168",
        },
        red: {
          1: "#F63D51"
        }
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config