import React from "react";

const SideCart = ({ watchTime }) => {
  return (
    <div className="border-2 border-zinc-400 p-10 rounded-lg">
      <h1 className="text-2xl font-bold text-center">My Cart</h1>
      <div className="mt-5 text-center">
        <p>Total Watch Time</p>
        <input type="text" value={0} disabled />
      </div>
      <h5 className="text-center mt-3  text-lg">Add Break Time</h5>
      <div className="text-center mt-4">
        <button className="w-25 btn-circle btn btn-success">15</button>
        <button className="w-25 btn-circle btn btn-info ml-2">20</button>
        <button className="w-25 btn-circle btn btn-danger ml-2">25</button>
      </div>
    </div>
  );
};

export default SideCart;
