import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./app/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./content/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: '"Lato", sans-serif',
        lora: '"Lora"',
      },
    },
  },
} satisfies Config;
