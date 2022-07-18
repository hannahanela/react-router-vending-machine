import VendingMachine from "./VendingMachine";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Prunes from "./Prunes";
import Anchovies from "./Anchovies";
import Coffee from "./Coffee";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Prunes" element={<Prunes />} />
          <Route path="/Anchovies" element={<Anchovies />} />
          <Route path="/Coffee" element={<Coffee />} />
          <Route path="/" element={<VendingMachine />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
