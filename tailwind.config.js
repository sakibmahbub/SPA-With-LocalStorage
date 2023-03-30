/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e00f78",

          secondary: "#21a584",

          accent: "#5f79d8",

          neutral: "#171622",

          "base-100": "#47384C",

          info: "#A6DFED",

          success: "#208348",

          warning: "#DAB910",

          error: "#F97862",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
