import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <div>
        <NavBar />
        <Hero />
        <h1 className="text-white text-xl mx-7">Silhouette No. 1 – Vermilion</h1>
      </div>
    </div>
  );
};

export default App;
