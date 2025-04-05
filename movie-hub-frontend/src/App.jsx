import { useState } from 'react'

import './App.css'
import MovieCard from './components/moviecard.jsx/Moviecard'
import Home from './pages/Home';

function App() {
   
  // const movieNumber = 1;
  
  
  

  return (

    //conditional rendering in react {movie number === 1 ?}
    <>
    <Home/>

  {/* {movieNumber === 1 ?(
    <MovieCard movie ={{title:"tims Film" ,release_date: "2024" }}/>
  ) : (
  <MovieCard movie ={{title:"Joes Film" ,release_date: "2024" }}/>
  )} */}
    </>
  )
}

export default App
