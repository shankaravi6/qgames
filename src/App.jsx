import React from "react";
import usePalette, { ThemeProvider, useTheme } from "./ThemeProvider";
import Navigation from "./components/BannerComponents/Naivgation";
import HomePage from "./pages/HomePage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BidsPage from "./pages/BidsPage";
import FooterSection from "./components/MainComponents/FooterSection";

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
<>
<div style={{ backgroundColor: `${palette.main}`, height: "unset" }}>
     
    <BrowserRouter>
    
    <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/bidding' element={<BidsPage/>} />
      </Routes>
      
      <FooterSection/>
    </BrowserRouter>
    </div>
    </>
  );
};

export default App;
