import React ,{useState}from 'react'
import MovieCard from '../components/moviecard.jsx/Moviecard'

function Home() {
    
    cons[searchQuery ,setSearchQuery]=useState("")

    const movies =[
        {id:1 ,title:'john wick', release_date:"2024"},
        {id:2 ,title:'Terminator', release_date:"1999"},
        {id:3 ,title:'The Matrix', release_date:"1998"},

    ] 

   const handleSearch =() =>{
    alet

   }

    
    
  return (
    <div className="home">
        {/* <form onSubmit={handleSearch} className="search-form">
            <input 
             type="text"
             placeholder='search for movies..'
             className ="search-input"
             value ={searchQuery}
             onChange = {(e) =>setSearchQuery(e.target.value)}
            />
            <button  type ="submit" className="search-button">Search</button>
        </form>
        <div className="movie-grid">
            {movies.map((movies) =>(
            <MovieCard movie={movies} key={movies.id}/>))}
        </div> */}

    </div>

  )
}

export default Home
