import React, { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";

const App = () => {
  const [watchTime, setWatchTime] = useState("");
  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousWatchTime) {
      const sum = previousWatchTime + time;
      localStorage.setItem("watchTime", sum);
      setWatchTime(sum);
    } else {
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  };
  return (
    <div>
      <div className="header">
        <Header></Header>
      </div>
      <div className="main flex justify-around mt-12">
        <div className="home-container">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="sideCart">
          <SideCart watchTime={watchTime}></SideCart>
        </div>
      </div>
    </div>
  );
};

export default App;
