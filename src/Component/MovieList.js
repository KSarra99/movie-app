import React from 'react';
import MovieCard from "./MovieCard";

const MovieList = ({films}) => {
    return (
        <div className="movie-list">
          {films.map(
              (elmt) => <MovieCard movie={elmt}/>
          )}

        </div>
    )
}

export default MovieList
