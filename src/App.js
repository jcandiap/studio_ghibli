import { ModalMovie } from './components/ModalMovie';
import { MovieCard } from './components/MovieCard';
import { useFetchMovies } from './hooks/useFetchMovies';

function App() {

  const { data:movies, loading } = useFetchMovies();

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3'>
        {
          movies.map( movie => (
            <MovieCard
              key = { movie.id }
              title = { movie.title }
              image = { movie.image }
              description = { movie.description }
              data-modal-toggle = "modal-movie"
            />
          ))
        }
      </div>
      <ModalMovie />
    </>
  );
}

export default App;
