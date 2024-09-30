import React, { useState } from "react";
import styles from "../styles/Playlist.module.css";

function PlayList({ playlist, clearPlaylist }) { // Accept playlist as a prop
  const [playlistName, setPlaylistName] = useState(""); // State for playlist name

  // Handle input change for playlist name
  const handleInputChange = (event) => {
    setPlaylistName(event.target.value); // Update the state with the input value
  };

  // Function to alert playlist details
  const alertPlaylistDetails = () => {
    // Constructing the alert message
    const songList = playlist.map((song) => `${song.title} by ${song.artist} (Album: ${song.album})`).join("\n");
    const message = `Playlist Name: ${playlistName}\n\nSongs:\n${songList}`;

    // Displaying the alert
    alert(message);
  };

  // Function to handle saving the playlist
  const handleSavePlaylist = () => {
    alertPlaylistDetails(); // Show alert with playlist details
    clearPlaylist(); // Clear the playlist
    setPlaylistName(""); // Clear the playlist name
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
      {playlist.map((song, index) => ( // Map through the playlist
        <div key={index} className={styles.Entry}>
          <p className={styles.Title}>{song.title}</p>
          <p className={styles.Artist}>{song.artist}</p>
          <p className={styles.Albumn}>{song.album}</p>
        </div>
      ))}
      <button onClick={handleSavePlaylist} className={styles.Button}>Save to Spotify</button>
    </div>
  );
}

export default PlayList;
