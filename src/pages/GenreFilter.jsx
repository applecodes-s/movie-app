import React from 'react'

const GenreFilter = ({genreList, setSelectedGenre}) => {
  return (
    <div>
        <h1>genre</h1>

      <select className='text-white bg-gray-900 bg-opacity-60 border rounded mt-4 ' onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="">All Genres</option>
       {genreList.map((genre) => (
        
          <option key={genre} value={genre.id}>
            {genre.name}</option>
        
        ))}
      </select>
    </div>
  )
}
// const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

export default GenreFilter
