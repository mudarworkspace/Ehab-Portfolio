import React from "react";
import AppRoutes from "./routes";
import './assets/styles/global.scss'
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";
import Footer from "./components/footer/Footer";
import "animate.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="container ">
          <NavBar />
          <AppRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
