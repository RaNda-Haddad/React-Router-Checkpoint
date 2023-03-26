import React from "react";
import MovieCard from "../moviecard/MovieCard";
import "./MovieList.css";


function MovieList({ movies, inputSearch, newRate}) {
  return (
    <div className="movielist">
      {movies

        .filter(
          (movie) =>
            movie.title
              .toUpperCase()
              .includes(inputSearch.toUpperCase().trim()) &&
            movie.rate == (newRate)
        )
        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
          
        ))}
      <div></div>
    </div>
  );
}

export default MovieList;