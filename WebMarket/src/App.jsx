import { useState } from "react";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
//import { Header } from "./components/Register";
import SignUp from "./components/Register";
//import axios from "axios";
import Market from "./components/Market";
import SellerPage from "./components/SellerPage";
import SellersRegister from "./components/SellersRegister";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SellersRegister" element={<SellersRegister />} />
          <Route path="/Sign-Up" element={<SignUp />} />
          <Route path="/home/:id" element={<Market />} />
          <Route path="/SellerPage/:id" element={<SellerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
