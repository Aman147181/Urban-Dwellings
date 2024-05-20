import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import {  Routes, Route } from "react-router-dom";
import Shop from "./pages/Products";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
const App = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div>
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/products/:name" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <Footer/>
    </div>
  );
};

export default App;
