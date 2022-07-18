import React from "react";
import { Link } from "react-router-dom";

// import Prunes from "./Prunes";
// import Anchovies from "./Anchovies";
// import Coffee from "./Coffee";

function VendingMachine() {
  return (
    <div>
      <h1>VENDING MACHINE OF YOUR DREAMS (not gross at all)</h1>
      <ul>
        <li><Link to="/coffee" >Coffee!</Link></li>
        <li><Link to="/anchovies"  >Anchovies!!</Link></li>
        <li><Link to="/prunes"  >Prunes!!!!!</Link></li>
      </ul>
    </div>
  );
}

export default VendingMachine;
