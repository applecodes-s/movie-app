import React, { createContext, useContext } from 'react'
import {FaHeart, FaRegHeart} from "react-icons/fa"
import Watchlist from './Watchlist'
import WatchlistContext from '../context/WatchListContext'
 
const MovieCards = ({movie}) => {

  const {toggleWatchList, watchlist} = useContext(WatchlistContext)

  const inWatchList = watchlist.some((m) => m.id === movie.id);

  return (
    <div>
        <div className='mx-auto mt-20 bg-zinc-900  text-white p-4 shadow-md relative w-64'>
            <img className=' rounded-xl w-64 h-96 object-cover' 
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
            alt={movie.title} />
            <h1 className='text-2xl font-bold mt-4'
            >{movie.title}</h1>
            <p className='text-gray-300' >{movie.release_date}</p>

            <button className='absolute top-4 right-2 p-3 shadow-lg text-red-500 text-2xl'
            onClick = {() => toggleWatchList(movie)}>
               { inWatchList ? <FaHeart /> : <FaRegHeart /> }
            </button>
        </div>
    </div>
  )
}

export default MovieCards
