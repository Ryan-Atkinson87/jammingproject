import React from "react";
import styles from "../styles/SearchBar.module.css";
import sampleSongs from "./Tracklist";

function SearchBar({ updateResults }) {
  // Function to handle searching songs
  const searchSongs = () => {
    const query = document.getElementById("searchBar").value.toLowerCase();
    
    // Filter songs based on the query matching title, artist, or album
    const filteredSongs = sampleSongs.filter(
      (song) =>
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query) ||
        song.album.toLowerCase().includes(query)
    );

    // Update the results using the updateResults function passed from App
    updateResults(filteredSongs);
  };

  // Function to handle key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchSongs(); // Call the search function if Enter is pressed
    }
  };

  return (
    <div className={styles.Container}>
      <input
        type="text"
        id="searchBar"
        placeholder="Search for songs or artists..."
        className={styles.Search}
        onKeyDown={handleKeyPress} // Add onKeyPress event
      />
      <button id="searchButton" onClick={searchSongs} className={styles.Button}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
