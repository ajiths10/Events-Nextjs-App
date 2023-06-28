/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2mxl": "1435px",
        mxl: "1380px",
        mx: "500px",
        xs: "440px",
        "2xs": "385px",
        ex: "350px",
      },
    },
  },
  plugins: [],
};
