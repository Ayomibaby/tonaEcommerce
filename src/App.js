import React from "react";
import {  Routes, Route, BrowserRouter } from "react-router-dom";

import PagLayout from "./layout/pageLayout/pagLayout";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import All from "./pages/AllDesigns/All";
import Men from "./pages/Men/men";
import Female from "./pages/Female/female";
import Unisex from "./pages/Unisex/Unisex";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Checkout from "./pages/checkout/checkout";
import Signup from "./pages/AuthPages/signup";
import Login from "./pages/AuthPages/Login";

function App() {
  return (
    <>
    <ToastContainer 
    position="top-right"
    autoClose={2000}
    hideProgressBar={true}
    newestOnTop={true}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"/>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<PagLayout><Dashboard></Dashboard></PagLayout>}></Route>
      <Route path="/Shop" element={<PagLayout><All/></PagLayout>}></Route>
      <Route path="/Men" element={<PagLayout><Men/></PagLayout>}></Route>
      <Route path="/Female" element={<PagLayout><Female/></PagLayout>}></Route>
      <Route path="/Unisex" element={<PagLayout><Unisex/></PagLayout>}></Route>
      <Route path="/checkout" element={<PagLayout><Checkout/></PagLayout>}></Route>
      <Route path="/signup" element={<PagLayout><Signup/></PagLayout>}></Route>
      <Route path="/login" element={<PagLayout><Login/></PagLayout>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
