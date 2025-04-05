import React, { useState } from 'react'; // Import React and useState hook
import MovieCard from '../components/MovieCard'; // Import the MovieCard component

import "../css/Home.css"

function Home() {
  // State to store the user's search input
  const [searchQuery, setSearchQuery] = useState("");

  // Sample movie data (could be replaced with data from an API later)
  const movies = [
    { id: 1, title: 'John Wick', release_date: "2024" },
    { id: 2, title: 'Terminator', release_date: "1999" },
    { id: 3, title: 'The Matrix', release_date: "1998" },
  ];

  // Function to handle form submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    alert("Search triggered"); // Simple alert for now
  };

  return (
    <div className="home">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..." // Input placeholder text
          className="search-input"
          value={searchQuery} // Input value bound to state
          onChange={(e) => setSearchQuery(e.target.value)} // Updates state on typing
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {/* Movie Grid Section */}
      <div className="movie-grid">
        {movies.map((movie) =>
          // Filter movies based on the search query (case-insensitive)
          movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
            // Render MovieCard for each matching movie
            <MovieCard movie={movie} key={movie.id} />
          )
        )}
      </div>
    </div>
  );
}

export default Home; // Export the Home component


