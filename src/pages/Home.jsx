import React from "react";
import Content from "../components/Content/Content";
// import {SongProvider} from '../context/songContext/SongContext'

const Home = ({
  songs,
  setSongs,
  setCurrentSong,
  currentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
  audioRef,
  recentSongs,
  setRecentSongs,
  likeSong,
  setLikeSong,
}) => {
  return (
    // <SongProvider>
    <Content
      songs={songs}
      setSongs={setSongs}
      setCurrentSong={setCurrentSong}
      currentSong={currentSong}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      songInfo={songInfo}
      setSongInfo={setSongInfo}
      audioRef={audioRef}
      recentSongs={recentSongs}
      setRecentSongs={setRecentSongs}
      likeSong={likeSong}
      setLikeSong={setLikeSong}
    />
    // </SongProvider>
  );
};

export default Home;
