/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#fafafa",
          200: "rgba(0, 0, 0, 0.4)",
          300: "rgba(0, 0, 0, 0.24)",
          400: "rgba(0, 0, 0, 0.6)",
          500: "rgba(0, 0, 0, 0.08)",
          600: "rgba(0, 0, 0, 0.03)",
          700: "rgba(255, 255, 255, 0.16)",
          800: "rgba(0, 0, 0, 0.16)",
        },
        black: "#000",
        "background-color-primary": "#fff",
        whitesmoke: {
          100: "#f7f6f2",
          200: "#eee",
        },
        red: "#eb001b",
        tomato: "#f24824",
        olivedrab: "#7ab342",
      },
      spacing: {},
      fontFamily: {
        "h4-32": "Montserrat",
        "p3-16": "'DM Sans'",
        oswald: "Oswald",
        inter: "Inter",
        "web-p3-16": "Roboto",
      },
      borderRadius: {
        "81xl": "100px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      xs: "12px",
      smi: "13px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1410: {
        raw: "screen and (max-width: 1410px)",
      },
      mq1280: {
        raw: "screen and (max-width: 1280px)",
      },
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      lg: {
        max: "1200px",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq991: {
        raw: "screen and (max-width: 991px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq480: {
        raw: "screen and (max-width: 480px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
