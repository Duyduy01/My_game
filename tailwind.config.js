/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      boxShadow: {
        "rainy-cloud": "90px 0 0 30px #fff",
      },
      dropShadow: {
        "rainy-cloud": "0 0 35px #fff",
      },
      animation: {
        bolt: {
          "0%": {
            filter: "drop-shadow(8px 8px 0 #0005) drop-shadow(0 0 0 #fff)",
          },
          "95%": {
            filter: "drop-shadow(8px 8px 0 #0005) drop-shadow(0 0 50px #fff)",
          },
        },
      },
    },
  },
  plugins: [],
};
