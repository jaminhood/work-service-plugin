/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js}"],
 darkMode: "class",
 theme: {
  extend: {
   colors: {
    "main-primary": `#5E4A96`,
    "light-primary": `#EEEBF4`,
    "main-secondary": `#B0CB6D`,
   },
   fontFamily: {
    "sansation-bold": ["sansationBold"],
    "sansation-regular": ["sansationRegular"],
    "sansation-light": ["sansationLight"],
    "jost-regular": ["jostRegular"],
   },
  },
 },
 plugins: [],
}
