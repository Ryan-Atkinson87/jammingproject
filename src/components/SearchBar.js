import React from "react";
import styles from "../styles/SearchBar.module.css";
//import sampleSongs from "./Tracklist";
import getAccessToken from "../api/access";

function SearchBar({ updateResults }) {
  // Function to handle searching songs
  const searchSongs = async () => {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const token = getAccessToken();

    if (!query || !token) return;

    const searchEndpoint = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      query
    )}&type=track&limit=10`;

    const response = await fetch(searchEndpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    const filteredSongs = data.tracks.items.map((track) => ({
      title: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri, // Store the track URI for later use
    }));

    updateResults(filteredSongs);
  };

  // Function to handle key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
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
