import React, { useContext, useState } from 'react'
import GenreFilter from './GenreFilter'
import MovieCard from './MovieCards'
import WatchlistContext from '../context/WatchListContext'; 

const Watchlist = () => {
  const { watchlist, genreList } = useContext(WatchlistContext);
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  // Step 1: filter by search
  const filteredBySearch = watchlist.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  // Step 2: then filter by genre (if selected)
  const filteredMovies = filteredBySearch.filter((movie) =>
    !selectedGenre || movie.genre_ids?.includes(Number(selectedGenre))
  );

  return (
    <div className='bg-black min-h-screen'>
      <div className='bg-black flex flex-col justify-center items-center'>
        <div className='mt-20'>
          <input
            className='z-10 border border-gray-800 p-3 w-3/4 md:w-1/2 fixed top-20 left-1/2 transform -translate-x-1/2 rounded-lg bg-opacity-60 bg-zinc-600 backdrop-blur-md text-white'
            type="text"
            placeholder='Search...'
            onChange={(e) => setSearch(e.target.value)}
          />

          <h1 className='text-white mt-28 text-5xl font-bold'>🎬 Your Watchlist</h1> 
        </div>
      </div>

      <div className='mt-4 flex justify-center'>
        <GenreFilter genreList={genreList} setSelectedGenre={setSelectedGenre} />
      </div>

      <div className="movies-container grid gap-6 px-4 
                      grid-cols-1 mx-auto 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4 
                      xl:grid-cols-5 
                      2xl:grid-cols-6 pb-10">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
