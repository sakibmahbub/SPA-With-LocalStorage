import React from "react";

const SingleCard = ({ movie, handleWatchTime }) => {
  return (
    <div className="movie-card card w-96 border-2 border-zinc-400 rounded-lg">
      <div className="movie-poster w-1/2 mx-auto">
        <img className="w-full" src={movie.poster} alt="" />
      </div>
      <div className="card-body text-center">
        <h3 className="text-xl font-bold">{movie.movieName}</h3>
        <p>{movie.description}</p>
        <div className="timeAndRating flex justify-around ">
          <p>Watch time : {movie.watchTime}</p>
          <p>Rating : {movie.imdbRating}</p>
        </div>
        <button
          onClick={() => handleWatchTime(movie.watchTime)}
          className="btn btn-primary w-full text-center"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
