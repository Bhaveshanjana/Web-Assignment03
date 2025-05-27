import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <div>
        <NavBar />
        <Hero />
        <Product />
      </div>
    </div>
  );
};

export default App;
