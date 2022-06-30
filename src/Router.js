import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Detail from './pages/Detail/Detail';
import Shop from './pages/Shop/Shop';
import Survey from './pages/Survey/Survey';
import Qna from './pages/Qna/Qna';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Survey/*" element={<Survey />} />
        <Route path="/Qna" element={<Qna />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
