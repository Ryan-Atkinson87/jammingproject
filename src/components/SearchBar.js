import React from 'react';
import styles from '../styles/SearchBar.module.css'

function SearchBar() {
  return (
    <div className={styles.Container}>
      <input type="text" placeholder="Search for songs or artists..." className={styles.Search} />
      <button className={styles.Button}>Add to playlist</button>
    </div>
  );
};


export default SearchBar;
