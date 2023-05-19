import './App.css';
import {useState, useEffect } from 'react';
import React from 'react';
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

// const API_URL = 'http://localhost:3000/http://www.omdbapi.com/?i=tt3896198&apikey=ea75e6ff';
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=2d499238"
    const response = await fetch(`${API_URL}&s=${title}`);
    // const data = response.json();1
    // const API_URL = "https://jsonplaceholder.typicode.com/todos/1"
    // const response = await fetch(API_URL)
    const data = await response.json()
    console.log(data)
    setMovies(data.Search);
    // data.then((res) => {
        // setMovies(res.Search);
    // });
}

useEffect(() => {
    searchMovies('spiderman');
}, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
