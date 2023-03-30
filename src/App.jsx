import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";

const App = () => {
  return (
    <div>
      <div className="header">
        <Header></Header>
      </div>
      <div className="main flex justify-around mt-12">
        <div className="home-container">
          <Home></Home>
        </div>
        <div className="sideCart">
          <SideCart></SideCart>
        </div>
      </div>
    </div>
  );
};

export default App;
