import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopMenu from "./components/topmenu";
import LandingPage from "./components/landingpage";
import Products from "./components/products/products";
import ContactUs from "./components/contactus";

function App() {
  return (
    <Router>
      <div>
      <TopMenu />
        <Routes>
        
          <Route path="/products"  element={<Products />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
