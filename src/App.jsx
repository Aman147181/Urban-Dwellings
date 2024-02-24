import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
const App = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div>
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </div>
  );
};

export default App;
