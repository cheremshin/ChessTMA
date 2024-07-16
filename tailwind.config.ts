import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
       primary: "#000000",
       background: "#FFFFFF",
       accent: "#821F1F",
       button: {
        primary: "#606060",
        hovered: "#000000",
       },
     },
     backgroundImage: {
      
     },
    },
  },
  plugins: [],
};
export default config;
