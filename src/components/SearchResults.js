import React from "react";
import styles from "../styles/SearchResults.module.css";

function SearchResults() {
  return (
    <div className={styles.Container}>
      <h2>Search Results</h2>
      <div className={styles.Entry}>
        <p className={styles.Title}>Song Title 1</p>
        <p className={styles.Artist}>Song Artist 1</p>
        <p className={styles.Albumn}>Song Albumn 1</p>
        <button className={styles.AddButton}>+</button>
      </div>
      <div className={styles.Entry}>
        <p className={styles.Title}>Song Title 2</p>
        <p className={styles.Artist}>Song Artist 2</p>
        <p className={styles.Albumn}>Song Albumn 2</p>
        <button className={styles.AddButton}>+</button>
      </div>
      <div className={styles.Entry}>
        <p className={styles.Title}>Song Title 3</p>
        <p className={styles.Artist}>Song Artist 3</p>
        <p className={styles.Albumn}>Song Albumn 3</p>
        <button className={styles.AddButton}>+</button>
      </div>
    </div>
  );
}

export default SearchResults;
