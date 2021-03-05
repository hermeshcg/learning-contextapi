import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';
import Nav from './Components/Nav';
import { MovieProvider } from './MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
