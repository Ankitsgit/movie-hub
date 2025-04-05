import { useState } from 'react'

import './App.css'

import Home from './pages/Home';
import Favourite from './pages/favourite';

import {Routes ,Route} from "react-router-dom"

function App() {
   
  // const movieNumber = 1;
  
  
  

  return (

    //conditional rendering in react {movie number === 1 ?}
    <>
      <main className="main-content">
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/favourites" element ={<Favourite/>}/>
        </Routes>
      </main>

  {/* {movieNumber === 1 ?(
    <MovieCard movie ={{title:"tims Film" ,release_date: "2024" }}/>
  ) : (
  <MovieCard movie ={{title:"Joes Film" ,release_date: "2024" }}/>
  )} */}
    </>
  )
}

export default App
