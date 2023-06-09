import React, { useEffect, useState } from "react";

const SideCart = ({ watchTime }) => {
  const [time, setTime] = useState();
  useEffect(() => {
    const getTime = localStorage.getItem("watchTime");
    setTime(getTime);
  }, [watchTime]);
  return (
    <div className="w-72 border-2 border-zinc-400 p-10 rounded-lg">
      <h1 className="text-2xl font-bold text-center">My Cart</h1>
      <div className="mt-5 text-center">
        <p>Total Watch Time</p>
        <input type="text" value={0} disabled />
      </div>
      <h5 className="text-center mt-4  text-lg">Add Break Time</h5>
      <div className="text-center mt-5">
        <button className="w-25 btn-circle btn btn-primary">15</button>
        <button className="w-25 btn-circle btn btn-primary ml-2">20</button>
        <button className="w-25 btn-circle btn btn-primary ml-2">25</button>
      </div>
    </div>
  );
};

export default SideCart;
