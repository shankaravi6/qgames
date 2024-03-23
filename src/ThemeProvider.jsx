import React, { createContext, useContext, useMemo, useState } from "react";

export const colorTokens = {
 //Green
  primary: {
    800: "#2c7a5f",
    900: "#34c8a0",
    1000: "#2cae80",
  },
  //Dark Green
  secondary: {
    800:"#2b6e57",
    900: "#255e4a",
    1000:"#07120e",
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const themeSettings = useMemo(() => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              main: colorTokens.secondary[1000],
              secondary:colorTokens.primary[1000],
              gradmain:colorTokens.secondary[800],
              grad:colorTokens.primary[900],
            }
          : {
              main: colorTokens.primary[1000],
              secondary: colorTokens.secondary[1000],
              gradmain:colorTokens.primary[800],
              grad:colorTokens.secondary[900],
            }),
      },
    };
  }, [mode]);

  const value = useMemo(() => ({ mode, toggleMode, themeSettings }), [
    mode,
    toggleMode,
    themeSettings,
  ]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, themeSettings }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

const usePalette = () => {
  const { themeSettings } = useTheme();
  return themeSettings.palette;
};

export default usePalette;
