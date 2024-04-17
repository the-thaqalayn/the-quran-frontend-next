import { light } from "@fortawesome/fontawesome-svg-core/import.macro";
import type { Config } from "tailwindcss";
import colors, { gray } from "tailwindcss/colors";

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        surah: ['"surahnames"'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: colors,
        },
        dark: {
          colors: {
            // black: colors.orange[900],
            // white: colors.gray[600],
            background: colors.gray[700],
            // blue: {
            //   "700": colors.cyan[800],
            // },
            // gray: {
            //   "50": colors.gray[700],
            // },
          },
        },
      },
    }),
  ],
};
export default config;
