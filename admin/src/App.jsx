import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Admin from "./subcomp/Admin";
import ProductList from "./subcomp/ProductList";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/admin" element={<Admin />} />
              <Route path="/product-list" element={<ProductList />} />
              <Route path="/settings" element={<div>Settings Page</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
