const light = {
  bg: {
    body: "#FFF",
    background: "#FFF",
    colorBorder: "#0E141B",
  },
  text: {
    primary: "#0E141B",
  },
};

const dark = {
  bg: {
    body: "#0E141B",
    colorBorder: "#FFF",
    background: "#0E141B",
  },
  text: {
    primary: "#ffffff",
  },
};

const defaultTheme = {
  // Temp fonts
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif",
  },

  // Breakpoints for responsive design
  breakpoints: {
    xs: "screen and (max-width: 480px)",
    sm: "screen and (max-width: 768px)",
    md: "screen and (max-width: 1024px)",
    lg: "screen and (max-width: 1200px)",
    xl: "screen and (max-width: 1599px)",
  },
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
