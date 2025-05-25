import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import WatchlistContext from '../context/WatchListContext'; 
const Navbar = () => {
  const { watchlist } = useContext(WatchlistContext); 

  return (
    <nav className='z-10 bg-opacity-80 bg-zinc-900 backdrop-blur-md p-4 flex justify-between w-full text-white fixed top-0'>
      <Link to='/' className='text-lg sm:text-2xl font-bold text-green-500'>
        🍿 Popcorn Picks
      </Link>
      <Link to='/watchlist' className='text-lg sm:text-2xl'>
        Watchlist ({watchlist.length}) 
      </Link>
    </nav>
  );
};

export default Navbar;
