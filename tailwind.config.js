const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        shade1: "#FFFFFF",
        shade2: "#E8E8E8",
        shade3: "#1386D140",
        shade4: "#03395C",
        shade5: "#A5A5A5",
        disabled: "rgba(255, 255, 255, 0.5)",
      },
      backgroundColor: {
        primary: "#000000",
        secondary: "#711ACC",
        disabled: "rgba(255, 255, 255, 0.12)",
      },
      borderColor: {
        primary: "#FFFFFF",
        secondary: "#1970A3",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ["Public Sans", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "10px",
      },
      backgroundImage: {
        avatar_bg_gradient:
          "linear-gradient(to right, #711ACCF2, #6A18C046, #390D66F2)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const inter = theme("fontFamily.inter");

      addComponents(
        {
          ".text-h1": {
            fontFamily: inter,
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "36px",
          },

          ".text-h2": {
            fontFamily: inter,
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "36px",
          },

          ".text-h3": {
            fontFamily: inter,
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "17px",
            lineHeight: "25px",
          },

          ".text-h4": {
            fontFamily: inter,
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "25px",
          },

          ".text-h5": {
            fontFamily: inter,
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "22px",
          },

          ".text-h6": {
            fontFamily: inter,
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
          },

          ".text-label": {
            fontFamily: inter,
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "12px",
            lineHeight: "15px",
          },

          ".text-small": {
            fontFamily: inter,
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "20px",
          },
          ".text-extrasmall": {
            fontFamily: inter,
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "10px",
            lineHeight: "15px",
          },
        },
        ["responsive", "hover"]
      );
    }),
  ],
};
