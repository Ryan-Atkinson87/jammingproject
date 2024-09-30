import React from "react";
import styles from "../styles/SearchResults.module.css";

function SearchResults({ results, addToPlaylist }) {
  return (
    <div className={styles.Container}>
      <h2>Search Results</h2>
      {results.length > 0 ? (
        results.map((song, index) => (
          <div key={index} className={styles.Entry}>
            <p className={styles.Title}>{song.title}</p>
            <p className={styles.Artist}>{song.artist}</p>
            <p className={styles.Album}>{song.album}</p>
            <button className={styles.AddButton} 
            onClick={() => addToPlaylist(song)} // Add song to playlist on button click
          >+</button>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SearchResults;
