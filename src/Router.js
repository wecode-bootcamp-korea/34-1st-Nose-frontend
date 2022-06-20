import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Detail from "./pages/Detail/Detail";
import Shop from "./pages/Shop/Shop";
import Survey from "./pages/Survey/Survey";
import Nav from "./component/Nav/Nav";
import Footer from "./component/Footer/Footer";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Nav />
        <Route path="/" element={<Main />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Survey" element={<Survey />} />
        <Footer />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
