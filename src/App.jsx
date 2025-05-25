import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./pages/Navbar"
import Watchlist from "./pages/Watchlist"
import { WatchlistProvider } from './context/WatchListContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WatchlistProvider>
    <BrowserRouter>
     
     <Navbar />

     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/watchlist' element= {<Watchlist />} />
     </Routes>
     </BrowserRouter>
    </WatchlistProvider>
     
    </>
  )
}

export default App
