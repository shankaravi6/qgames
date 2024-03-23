import React from "react";
import usePalette, { ThemeProvider, useTheme } from "./ThemeProvider";
import Navigation from "./components/BannerComponents/Naivgation";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const AppContent = () => {
  const palette = usePalette();

  return (
    <div style={{ backgroundColor: `${palette.main}`, height: "unset" }}>
      <Navigation />
      <HomePage />
    </div>
  );
};

export default App;
