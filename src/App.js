import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { themeLight, themeDark } from "./theme/theme";

import "./App.css";

const App = () => {
  const [theme, setTheme] = useState('light')

  window.addEventListener("storage", function () {
    setTheme(localStorage.getItem('theme'))
    
});

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <CssBaseline />
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
    
  );
};

export default App;
