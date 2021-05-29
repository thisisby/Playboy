import React, { useEffect } from "react";
import "./PlayList.scss";

// import {SongContext} from '../../context/songContext/SongContext'

const PlayList = ({
  songs,
  setSongs,
  setCurrentSong,
  currentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
  audioRef,
}) => {
  // const [songs, setSongs] = useContext(SongContext);
  // const [currentSong, setCurrentSong] = useState(songs[0]);

  // useEffect
  useEffect(() => {
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  }, [currentSong]);

  //Play Song Func
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  // Formation the time in the duration and currentTime of the Music
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  // Timming
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    // calculate percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: animation,
    });
  };

  // Draging the input
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  // Skipping the musics
  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        if (isPlaying) {
          audioRef.current.play();
        }
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  // Add styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="playlist">
      <div className="playlist-body">
        <div className="playlist-bar-head">
          <div
            style={{ backgroundImage: `url(${currentSong.cover})` }}
            className="playlist-img"
          ></div>
          <div className="playlist-title">
            <span>{currentSong.name}</span>
            <br />
            <span>{currentSong.artist}</span>
          </div>
        </div>
        <div className="playlist-bar-middle">
          <div className="playlist-range">
            <span>{getTime(songInfo.currentTime)}</span>
            <div className="track">
              <input
                min={0}
                max={songInfo.duration || 0}
                value={songInfo.currentTime}
                onChange={dragHandler}
                type="range"
              />
              <div style={trackAnim} className="animate-track"></div>
            </div>
            <span>
              {songInfo.duration ? getTime(songInfo.duration) : "0:00"}
            </span>
          </div>
        </div>
        <div className="playlist-bar-end">
          <div className="playlist-controller">
            <button onClick={() => skipTrackHandler("skip-back")}>
              <ion-icon name="play-skip-back"></ion-icon>
            </button>
            <button onClick={playSongHandler}>
              <ion-icon
                name={`${isPlaying ? "pause-outline" : "play"}`}
              ></ion-icon>
            </button>
            <button onClick={() => skipTrackHandler("skip-forward")}>
              <ion-icon name="play-skip-forward"></ion-icon>
            </button>
          </div>
        </div>
      </div>
      <audio
        src={currentSong.audio}
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
};

export default PlayList;
