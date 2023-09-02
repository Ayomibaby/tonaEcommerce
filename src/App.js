import React from "react";
import {  Routes, Route, BrowserRouter } from "react-router-dom";

import PagLayout from "./layout/pageLayout/pagLayout";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import All from "./pages/AllDesigns/All";
import Men from "./pages/Men/men";
import Female from "./pages/Female/female";
import Unisex from "./pages/Unisex/Unisex";

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<PagLayout><Dashboard></Dashboard></PagLayout>}></Route>
      <Route path="/Shop" element={<PagLayout><All/></PagLayout>}></Route>
      <Route path="/Men" element={<PagLayout><Men/></PagLayout>}></Route>
      <Route path="/Female" element={<PagLayout><Female/></PagLayout>}></Route>
      <Route path="/Unisex" element={<PagLayout><Unisex/></PagLayout>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
