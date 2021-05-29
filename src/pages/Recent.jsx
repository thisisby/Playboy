import React from "react";
import Content from "../components/Content/Content";
import RecentSongs from "../components/RecentSongs/RecentSongs";

const Recent = ({
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
}) => {
  return (
    <>
      <RecentSongs
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        currentSong={currentSong}
        recentSongs={recentSongs}
        setRecentSongs={setRecentSongs}
      />
    </>
  );
};

export default Recent;
