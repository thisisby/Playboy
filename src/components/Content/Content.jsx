import React from 'react'
import './Content.scss'
import PlayList from '../PlayList/PlayList';
import SongCollection from '../SongCollection/SongCollection'

const Content = ({
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
        <div className="content">
            <div className="content-header">
                <div className="content-header-items">
                    <span className="active">PlayList</span>
                </div>
                <div>
                    <ion-icon name="pulse-outline"></ion-icon>
                </div>
            </div>

                <SongCollection 
                    songs={songs}
                    setSongs={setSongs}
                    setCurrentSong={setCurrentSong}
                    type="All songs" 
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    audioRef={audioRef}
                    currentSong={currentSong}
                    recentSongs={recentSongs}
                    setRecentSongs={setRecentSongs}
                    likeSong={likeSong}
                    setLikeSong={setLikeSong}
                />
                <SongCollection 
                    songs={songs}
                    setSongs={setSongs}
                    setCurrentSong={setCurrentSong}
                    type="Chill" 
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    audioRef={audioRef}
                    currentSong={currentSong}
                    recentSongs={recentSongs}
                    setRecentSongs={setRecentSongs}
                    likeSong={likeSong}
                    setLikeSong={setLikeSong}
                />
                <SongCollection 
                    songs={songs}
                    setSongs={setSongs}
                    setCurrentSong={setCurrentSong}
                    type="Rock" 
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    audioRef={audioRef}
                    currentSong={currentSong}
                    recentSongs={recentSongs}
                    setRecentSongs={setRecentSongs}
                    likeSong={likeSong}
                    setLikeSong={setLikeSong}
                />
                
                <PlayList 
                    songs={songs}
                    setSongs={setSongs}
                    setCurrentSong={setCurrentSong}
                    currentSong={currentSong}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    songInfo={songInfo}
                    setSongInfo={setSongInfo}
                    audioRef={audioRef}
                />


        </div>
    )
}

export default Content
