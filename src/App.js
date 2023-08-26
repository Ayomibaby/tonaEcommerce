import React from "react";
import {  Routes, Route, BrowserRouter } from "react-router-dom";

import PagLayout from "./layout/pageLayout/pagLayout";
import Dashboard from "../src/pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<PagLayout><Dashboard></Dashboard></PagLayout>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
