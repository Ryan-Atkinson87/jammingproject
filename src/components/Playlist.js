import React, { useState, useEffect } from "react";
import styles from "../styles/Playlist.module.css";
import getAccessToken from "../api/access";
import credentials from "../api/spotify.js";

const playlistEndpoint = credentials.playlistEndpoint
const userID = credentials.userID

function PlayList({ playlist = [], clearPlaylist }) { 
  const [playlistName, setPlaylistName] = useState(""); // State for playlist name
  const [currentPlaylist, setCurrentPlaylist] = useState(playlist); // State for the playlist

  // Keep currentPlaylist in sync with the prop `playlist`
  useEffect(() => {
    setCurrentPlaylist(playlist);
  }, [playlist]);

  // Handle input change for playlist name
  const handleInputChange = (event) => {
    setPlaylistName(event.target.value); // Update the state with the input value
  };

  // Function to alert playlist details
  const alertPlaylistDetails = () => {
    // Constructing the alert message
    const songList = currentPlaylist.map((song) => `${song.title} by ${song.artist} (Album: ${song.album})`).join("\n");
    const message = `Playlist Name: ${playlistName}\n\nSongs:\n${songList}`;

    // Displaying the alert
    alert(message);
  };

  // Function to handle saving the playlist
  const handleSavePlaylist = async () => {
    const token = getAccessToken();
    if (!playlistName || currentPlaylist.length === 0 || !token) return;
  
    // Step 1: Create a playlist
    const createPlaylistEndpoint = `https://api.spotify.com/v1/users/${userID}/playlists`;
    const createPlaylistResponse = await fetch(createPlaylistEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: playlistName,
        description: 'Created via Spotify API',
        public: false // Set to true if you want it to be public
      })
    });
  
    const playlistData = await createPlaylistResponse.json();
  
    // Step 2: Add tracks to the playlist
    const addTracksEndpoint = `${playlistEndpoint}/${playlistData.id}/tracks`;
    const trackURIs = currentPlaylist.map(song => song.uri);
  
    await fetch(addTracksEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        uris: trackURIs
      })
    });
  
    // Clear the playlist and reset the name
    clearPlaylist();
    setPlaylistName('');
    setCurrentPlaylist([]);
  };  

  // Function to remove a song from the playlist
  const removeSong = (index) => {
    const updatedPlaylist = currentPlaylist.filter((_, songIndex) => songIndex !== index);
    setCurrentPlaylist(updatedPlaylist); // Update the playlist state
  };

  return (
    <div className={styles.Container}>
      <input
        type="text"
        placeholder="Playlist name..."
        className={styles.Name}
        value={playlistName} // Bind the input value to the state
        onChange={handleInputChange} // Call the handler on input change
      />
      {currentPlaylist.map((song, index) => ( // Map through the currentPlaylist
        <div key={index} className={styles.Entry}>
          <p className={styles.Title}>{song.title}</p>
          <p className={styles.Artist}>{song.artist}</p>
          <p className={styles.Albumn}>{song.album}</p>
          <button className={styles.Button} onClick={() => removeSong(index)}>x</button>
        </div>
      ))}
      <button onClick={handleSavePlaylist} className={styles.Button}>Save to Spotify</button>
    </div>
  );
}

export default PlayList;
