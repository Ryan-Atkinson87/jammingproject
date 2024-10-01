import React, { useState, useEffect } from "react";
import styles from "../styles/Playlist.module.css";

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
  const handleSavePlaylist = () => {
    alertPlaylistDetails(); // Show alert with playlist details
    clearPlaylist(); // Clear the playlist
    setPlaylistName(""); // Clear the playlist name
    setCurrentPlaylist([]); // Clear the local playlist
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
