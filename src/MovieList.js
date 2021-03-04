import { useState } from 'react';
import Movie from './Movie';

function MovieList() {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 1,
    },
    {
      name: 'Game of Thrones',
      price: '$10',
      id: 2,
    },
    {
      name: 'Inception',
      price: '$10',
      id: 3,
    },
  ]);

  return (
    <ul>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} />
      ))}
    </ul>
  );
}

export default MovieList;
