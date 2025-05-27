import React from "react";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div>
        <Hero />
        <Product />
        <Footer />
      </div>
    </div>
  );
};

export default App;
