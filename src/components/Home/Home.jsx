import React, { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <div className="movie-container">
        <div className="movie-card card w-72">
          <div className="movie-poster w-1/2 mx-auto">
            <img className="w-full" src="../../../public/batman.jpg" alt="" />
          </div>
          <div className="card-body text-center">
            <h3 className="text-xl font-bold">Movie Name</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <div className="timeAndRating flex justify-around ">
              <p>Watch time</p>
              <p>Rating</p>
            </div>
            <button className="btn btn-primary w-full text-center">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
