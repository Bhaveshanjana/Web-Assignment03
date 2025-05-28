import React, { useRef } from "react";
import Hero from "./Hero";
import Product from "./Product";
import Footer from "./Footer";

const Home = ({productRef}) => {
  return (
    <div>
      <Hero productRef={productRef} />
      <Product ref={productRef} />
      <Footer />
    </div>
  );
};

export default Home;
