import { useState } from "react";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./index.css";
//import { Header } from "./components/Register";
import SignUp from "./components/Register";
//import axios from "axios";
import Market from "./components/Market";
import SellerPage from "./components/SellerPage";
import SellersRegister from "./components/SellersRegister";
import SellerOrdersPage from "./components/SellerOrdersPage";
import CheckoutPage from "./components/CheckoutPage";
function App() {
  const [cartDetails, setCartDetails] = useState();
  return (
    <div className=",">
      <BrowserRouter>
        <Routes>
          <Route
            path="/CheckoutPage/:id"
            element={<CheckoutPage cartDetails={cartDetails} />}
          />
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SellerOrdersPage" element={<SellerOrdersPage />} />
          <Route path="/SellersRegister" element={<SellersRegister />} />
          <Route path="/Sign-Up" element={<SignUp />} />
          <Route
            path="/home/:id"
            element={<Market setCartDetails={setCartDetails} />}
          />
          <Route path="/SellerPage/:id" element={<SellerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
