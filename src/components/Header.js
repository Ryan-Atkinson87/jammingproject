import React from 'react';
import styles from '../styles/Header.module.css'

function Header() {
  return (
    <div className={styles.container}>
      <h1>Ja<span class={styles.highlight}>mmm</span>ing</h1>
    </div>
  );
};

export default Header;


