import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import PlayList from "./Playlist";
import styles from "../styles/App.module.css";

function App() {
  const [playlist, setPlaylist] = useState([]); // State to hold the playlist songs
  const [results, setResults] = useState([]); // State to hold search results

  const clearPlaylist = () => {
    setPlaylist([]); // Clear the playlist
  };


  const addToPlaylist = (song) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, song]); // Add the song to the playlist
  };

  const updateResults = (newResults) => {
    setResults(newResults); // Update search results
  };

  return (
    <div className={styles.App}>
      <div className={styles.Container}>
        <Header />
        <SearchBar updateResults={updateResults} /> {/* Pass updateResults function */}
        <div className={styles.ResultsPlaylist}>
          <SearchResults results={results} addToPlaylist={addToPlaylist} /> {/* Pass results to SearchResults */}
          <PlayList playlist={playlist} clearPlaylist={clearPlaylist} /> {/* Pass the playlist to PlayList */}
        </div>
      </div>
    </div>
  );
}

export default App;
