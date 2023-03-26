import "./App.css";
import { moviesData } from "./Data";
import { useState } from "react";
import MovieList from "./movielist/MovieList";
import FilterMovie from "./filtermovie/FilterMovie.js";
import AddMovie from "./AddMovie/AddMovie";
import Rating from "./Rating/Rating";



function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");
  const [newRate, setNewRate] = useState(1);

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };



  return (
    <div className="App">
      <FilterMovie inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <Rating newRate={newRate} setNewRate={setNewRate} />
      <MovieList movies={movies} inputSearch={inputSearch} newRate={newRate} setNewRate={setNewRate}/>
      <AddMovie add={add} />
      
    </div>
  );
}

export default App;
