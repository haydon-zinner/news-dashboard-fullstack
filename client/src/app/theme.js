export const themeSettings = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#ffab91",
          },
          secondary: {
            main: "#1b5e20",
          },
          warning: {
            main: "#ed6c02",
          },
          info: {
            main: "#0288d1",
          },
          success: {
            main: "#2e7d32",
          },
          error: {
            main: "#d32f2f",
          },
          background: {
            default: "#bbdefb",
            paper: "#90caf9",
          },
        }
      : {
          primary: {
            main: "#e65100",
          },
          secondary: {
            main: "#004d40",
          },
          buttonSelected: {
            main: "#b3e5fc"
          },
          warning: {
            main: "#ed6c02",
          },
          info: {
            main: "#0288d1",
          },
          success: {
            main: "#2e7d32",
          },
          error: {
            main: "#d32f2f",
          },
          background: {
            default: "#0c192f",
            paper: "#213a71",
          },
        }),
    typography: {
      h1: {
        fontFamily: "Roboto",
        fontSize: 40,
      },
      h2: {
        fontFamily: "Roboto",
        fontSize: 32,
      },
      h3: {
        fontFamily: "Roboto",
        fontSize: 24,
      },
      h4: {
        fontFamily: "Roboto",
        fontSize: 20,
      },
      h5: {
        fontFamily: "Roboto",
        fontSize: 16,
      },
      h6: {
        fontFamily: "Roboto",
        fontSize: 14,
      },
    },
  },
});
