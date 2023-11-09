/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        vergi: "#16bac5",
        maya: "#5fbff9",
        magnolia: "#efe9f4",
        eerie: "#171d1c",
        neon: "#5863f8",
      },
      backgroundImage: {
        masjid: "url('/src/pages/homepage/homepageComponents/masjid.JPG')",
      },
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
