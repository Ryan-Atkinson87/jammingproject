import React from 'react';
import styles from '../styles/Header.module.css'

function Header() {
  return (
    <div className={styles.Container}>
      <h1>Ja<span class={styles.Highlight}>mmm</span>ing</h1>
    </div>
  );
};

export default Header;


