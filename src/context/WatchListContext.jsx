import React, { createContext, useState, useEffect } from "react";

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [genreList, setGenreList] = useState([])

  useEffect(() => {
  
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=79ff08372518d122919afedc24a423dc`
  
    fetch(url)
    .then ((response) => response.json())
    .then ((data) => setGenreList(data.genres || []))
  }, [])

  const toggleWatchList = (movie) => {
    const index = watchlist.findIndex((m) => m.id === movie.id);
    if (index === -1) {
      setWatchlist([...watchlist, movie]);
    } else {
      setWatchlist([
        ...watchlist.slice(0, index),
        ...watchlist.slice(index + 1),
      ]);
    }
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, toggleWatchList, genreList}}>
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistContext;
