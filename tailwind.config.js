/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ef8da1",

          secondary: "#45d619",

          accent: "#0cb75f",

          neutral: "#1E232F",

          "base-100": "#E9E1EA",

          info: "#7091EB",

          success: "#1B9D8E",

          warning: "#F4B557",

          error: "#E7555D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
