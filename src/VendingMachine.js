import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Prunes from "./Prunes";
import Anchovies from "./Anchovies";
import Coffee from "./Coffee";

function VendingMachine() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Prunes" element={<Prunes />} />
        <Route path="/Anchovies" element={<Anchovies />} />
        <Route path="/Coffee" element={<Coffee />} />
        <Route path="/" element={<VendingMachine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default VendingMachine;
