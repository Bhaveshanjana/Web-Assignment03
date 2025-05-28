import React, { useRef } from "react";
import Checkout from "./components/Cart";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  const productRef = useRef(null);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home productRef={productRef} />} />
        <Route path="/cart" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
