import React from "react";
import styles from "../styles/Playlist.module.css";

function PlayList() {
  return (
    <div className={styles.container}>
      <h2>Playlist</h2>
      <ul>
        <li>Placeholder Song 1</li>
        <li>Placeholder Song 2</li>
        <li>Placeholder Song 3</li>
      </ul>
    </div>
  );
}

export default PlayList;
