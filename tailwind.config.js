module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "5rem",
        },
      },
      colors: {
        main: "#111111",
        mains: "#1e1e1e",
        second: "#bbb",
        third: "#151515",
        four: "#7A7A7A",
        six: "#4d4d4d",
        seven: "#141414",
        eight: "#262626",
      },
      boxShadow: {
        "3xl": "0 15px 64px 0 rgb(21, 21, 21)",
        "4xl": "0px 3px 10px 0px rgb(248 96 77 / 19%)",
        "5xl": "0px 6px 30px rgba(38, 78, 118, 0.1)",
        "6xl": "0px 4px 16px 0px rgb(248 96 77 / 11%)",
        "7xl": "0px 3px 15px 0px rgb(248 96 77 / 19%)",
      },
    },
  },
  plugins: [],
};
