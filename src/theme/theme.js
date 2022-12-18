import { createTheme } from "@mui/material";

export const themeLight = createTheme({
  palette: {
    primary: {
      main: "#ff2625",
      light: "#f53231",
      dark: "#910807",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    background: {
      paper: "#fff",
      default: "#fff",
    },
  },
  styleOverrides: {
    switchBase: {
      // Controls default (unchecked) color for the thumb
      color: "#ccc",
    },
    colorPrimary: {
      "&.Mui-checked": {
        // Controls checked color for the thumb
        color: "#f2ff00",
      },
    },
    track: {
      // Controls default (unchecked) color for the track
      opacity: 0.2,
      backgroundColor: "#fff",
      ".Mui-checked.Mui-checked + &": {
        // Controls checked color for the track
        opacity: 0.7,
        backgroundColor: "#fff",
      },
    },
  },
});

export const themeDark = createTheme({
  palette: {
    primary: {
      main: "#ff2625",
      light: "#f53231",
      dark: "#910807",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
      disabled: "#fff",
    },
    background: {
      paper: "#131516",
      default: "#131516",
    },
  },
  styleOverrides: {
    switchBase: {
      // Controls default (unchecked) color for the thumb
      color: "#ccc",
    },
    colorPrimary: {
      "&.Mui-checked": {
        // Controls checked color for the thumb
        color: "#f2ff00",
      },
    },
    track: {
      // Controls default (unchecked) color for the track
      opacity: 0.2,
      backgroundColor: "#fff",
      ".Mui-checked.Mui-checked + &": {
        // Controls checked color for the track
        opacity: 0.7,
        backgroundColor: "#fff",
      },
    },
  },
});
