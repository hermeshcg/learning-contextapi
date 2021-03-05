import { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from '../MovieContext';

function MovieList() {
  const [movies] = useContext(MovieContext);
  return (
    <ul>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.name} />
      ))}
    </ul>
  );
}

export default MovieList;
