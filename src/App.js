import React, { useState } from "react";
import "./App.css";
import Search from "./Component/Search";
import MovieList from "./Component/MovieList";
import { moviesdata } from "./movieData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import AddMovie from "./Component/AddMovie";

const App = () => {
  const [movies, setMovies] = useState(moviesdata);
  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const [search, setSearch] = useState("");
  const handleSearch = (input) => {
    setSearch(input);
  };
  const [rate, setRate] = useState(1);
  const handleRate = (Rating) => {
    setRate(Rating);
  };

  return (
    <div className="App">
      <Search handleSearch={handleSearch} handleRate={handleRate} />
      <MovieList
        films={movies.filter(
          (elmt) =>elmt.Moviename.toLowerCase().includes(search.toLowerCase().trim())&& elmt.Rating >= rate 
        )}
      />
      <AddMovie handleAdd={handleAdd} />
    </div>
  );
};

export default App;
