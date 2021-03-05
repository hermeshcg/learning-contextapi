import { useContext } from 'react';
import { MovieContext } from '../MovieContext';

function Nav() {
  const [movies] = useContext(MovieContext);
  return (
    <div>
      <h3>Hermes </h3>
      <p>List of movies: {movies.length}</p>
    </div>
  );
}

export default Nav;
