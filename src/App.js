import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import './App.css'
import SearchIcon from './search.svg'


// fe4058bb
// http://www.omdbapi.com/?i=tt3896198&apikey=fe4058bb

const API_URL = " http://www.omdbapi.com/?apikey=fe4058bb";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=$(title)`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLang</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value='superman'
          onChange={() => {}}/>
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {}} />
      </div>

      <div className="container">

      </div>
    </div>
  )
};

export default App;
