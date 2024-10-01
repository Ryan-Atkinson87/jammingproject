import React, { useState, useEffect } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import PlayList from "./Playlist";
import styles from "../styles/App.module.css";
import { getAccessToken } from '../api/access'; // Import the access token logic

function App() {
  const [playlist, setPlaylist] = useState([]); // State to hold the playlist songs
  const [results, setResults] = useState([]); // State to hold search results
  const [token, setToken] = useState(null); // State to hold Spotify access token
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication status
  const [tokenExpiration, setTokenExpiration] = useState(null); // State to hold token expiration time

  // Check for token on app load
  useEffect(() => {
    const tokenFromStorage = getAccessToken(); // Get the token from access.js (or localStorage)
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
      setIsAuthenticated(true); // Mark as authenticated
    }

    // Optionally, set up token expiration management
    const expirationTime = localStorage.getItem('spotify_token_expiration');
    if (expirationTime) {
      setTokenExpiration(expirationTime);
    }
  }, []);

  // Monitor token expiration and re-authenticate if expired
  useEffect(() => {
    if (tokenExpiration) {
      const now = new Date().getTime();
      if (now >= tokenExpiration) {
        alert('Session expired. Please log in again.');
        setIsAuthenticated(false);
        setToken(null);
        localStorage.removeItem('spotify_access_token');
        localStorage.removeItem('spotify_token_expiration');
      }
    }
  }, [tokenExpiration]);

  // Clear the playlist
  const clearPlaylist = () => {
    setPlaylist([]); 
  };

  // Add song to playlist
  const addToPlaylist = (song) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, song]); 
  };

  // Update search results
  const updateResults = (newResults) => {
    setResults(newResults); 
  };

  // If not authenticated, show a login button or handle re-authentication
  if (!isAuthenticated) {
    return (
      <div className={styles.App}>
        <div className={styles.Container}>
          <Header />
          <p>Please log in to Spotify to use the app.</p>
          <button onClick={() => getAccessToken()}>Log in to Spotify</button> {/* Re-authenticate */}
        </div>
      </div>
    );
  }

  // Main authenticated app rendering
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
