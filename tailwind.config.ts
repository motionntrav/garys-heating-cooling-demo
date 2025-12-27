import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          500: "#60A5FA",
          600: "#3B82F6",
          700: "#2563EB",
        },
        ink: "#111827",
        body: "#374151",
        stonebg: "#F5F5F4",
        border: "#E7E5E4",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(17, 24, 39, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
