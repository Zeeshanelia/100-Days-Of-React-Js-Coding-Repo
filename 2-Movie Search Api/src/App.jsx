import { useEffect, useState } from 'react';
import { Result } from './Component/Result';
import axios from 'axios';

const OMDB_LIST_API = "http://www.omdbapi.com/?apikey=9236f6af&s=avengers"; 
const OMDB_SEARCH_API = "http://www.omdbapi.com/?apikey=9236f6af&s="; 

function App() {
  const [movie, setMovie] = useState([]);
  const [searching, setSearching] = useState('');

  // Fetch default OMDb movies
  const getAllMovies = () => {
    axios.get(OMDB_LIST_API)
      .then(resp => {
        setMovie(resp.data.Search || []);
      })
      .catch(err => console.log("OMDb Error =>", err));
  };

  // Fetch searched movie from OMDb
  const getSearchedMovie = () => {
    if (!searching) return;
    axios.get(OMDB_SEARCH_API + encodeURIComponent(searching))
      .then(resp => {
        setMovie(resp.data.Search || []);
      })
      .catch(err => console.log("OMDb Search Error =>", err));
  };

  const handleChange = (e) => setSearching(e.target.value);

  useEffect(() => {
    if (!searching) {
      getAllMovies();
    } else {
      getSearchedMovie();
    }
  }, [searching]);

  return (
    <div className=' py-2'>
      <div className='w-11/12 mx-auto space-y-6 shadow-xl p-3 h-[450px]'>
        <div className="flex justify-center">
          <input
            value={searching}
            onChange={handleChange}
            type="search"
            className='w-5/12 block rounded text-slate-900 border p-2'
            placeholder='☠︎︎ Movie Search Here'
          />
        </div>

        {movie.length === 0 ? <div> Loading... </div> : <Result movie={movie} />}
      </div>
    </div>
  );
}

export default App;
