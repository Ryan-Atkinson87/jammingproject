import React from "react";
import styles from "../styles/Playlist.module.css";

function PlayList() {
  return (
    <div className={styles.Container}>
      <input type="text" placeholder="Playlist name..." className={styles.Name} />
      <div className={styles.Entry}>
        <p className={styles.Title}>Song Title 1</p>
        <p className={styles.Artist}>Song Artist 1</p>
        <p className={styles.Albumn}>Song Albumn 1</p>
      </div>
      <div className={styles.Entry}>
        <p className={styles.Title}>Song Title 2</p>
        <p className={styles.Artist}>Song Artist 2</p>
        <p className={styles.Albumn}>Song Albumn 2</p>
      </div>
      <div className={styles.Entry}>
        <p className={styles.Title}>Song Title 3</p>
        <p className={styles.Artist}>Song Artist 3</p>
        <p className={styles.Albumn}>Song Albumn 3</p>
      </div>
      <button className={styles.Button}>Save to Spotify</button>
    </div>
  );
}

export default PlayList;
