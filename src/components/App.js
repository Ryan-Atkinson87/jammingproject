import React from "react";
//import '../styles/App.module.css';
import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import PlayList from "./Playlist";
import styles from "../styles/App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Container}>
        <Header />
        <SearchBar />
        <div className={styles.ResultsPlaylist}>
          <SearchResults />
          <PlayList />
        </div>
      </div>
    </div>
  );
}

export default App;
