import React from "react";
import SideBar from "./components/SideBar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="flex">
      <div className="z-50">
        <SideBar />
      </div>
      <div className="relative">
        <Hero />
      </div>
    </div>
  );
};

export default App;
