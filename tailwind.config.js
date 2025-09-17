/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "teks-utama": "josefin sans",
      },
      colors: {
        'warna-teks': '#ffffff'
      },
      backgroundColor: {
        "warna-utama":"#680000",
        "warna-second":"#5A0202"
      }
    },
  },
  plugins: [],
};
