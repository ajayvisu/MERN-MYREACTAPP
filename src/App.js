import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Usermangement from "./components/signup/Usermanagement";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import AboutUs from "./components/pages/AboutUs";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Footer />
        <Signup />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pages" element={<AboutUs />} />
        </Routes>
      </Router>

      {/* <Login />
      <Signup /> */}
    </div>
  );
}

export default App;
