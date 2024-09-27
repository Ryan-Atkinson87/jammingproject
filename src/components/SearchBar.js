import React from 'react';
import styles from '../styles/SearchBar.module.css'

function SearchBar() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search for songs or artists" />
      <button>Add to playlist</button>
    </div>
  );
};


export default SearchBar;
