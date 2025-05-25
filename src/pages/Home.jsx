import React, { useEffect, useState } from 'react'
import MovieCards from './MovieCards'

const Home = () => {

const [movies, setMovies] = useState ([])

const [page, setPage] = useState (1)
const [search,  setSearch] = useState ("")

useEffect(() => {

  let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=79ff08372518d122919afedc24a423dc`

  if(search) {
    url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=79ff08372518d122919afedc24a423dc`
  }

  fetch(url)
  .then ((response) => response.json())
  .then ((data) => setMovies(data.results))
}, [page, search])

return (
    <>
    <div className='bg-black'>
    <div className='bg-black flex flex-col justify-center items-center'>
    <div className='mt-20 '>
      
      <input 
      className='z-10 border border-gray-800 p-3 w-3/4 md:w-1/2 left-1/2 transform -translate-x-1/2 fixed top-20 rounded-lg bg-opacity-60 bg-zinc-600 backdrop-blur-md  text-white' 
      type="text" placeholder='search' 
      onChange={(e) => 
        setSearch(e.target.value)
      }/>
      <h1 className='text-white mt-20 text-center text-3xl sm:text-5xl font-bold'>🎬 Explore Movies 🍿</h1> 
      </div>
    </div>


    <div className="movies-container grid gap-6 px-4 
                grid-cols-1 mx-auto 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                xl:grid-cols-5 
                2xl:grid-cols-6">
  {movies.map((movie) => (
    <MovieCards key={movie.id} movie={movie} />
  ))}
</div>


    <div className='pagination-container pt-5 pb-10 flex justify-between mt-5'>
      <button 
      disabled={page == 1}
      className='py-4 px-6 text-lg bg-green-500 hover:bg-green-600 text-white mx-4  rounded-lg' 
      onClick={() => {
        setPage((prev) => prev - 1)
      }}>Prev</button>
      <button className='py-4 px-6 text-lg bg-green-500 hover:bg-green-600 text-white mx-4  rounded-lg' 
      onClick={() => {
        setPage((prev) => prev + 1)
      }}>Next</button>
    </div>
</div>
    </>
  )
}

export default Home
