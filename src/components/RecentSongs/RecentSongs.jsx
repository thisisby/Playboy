import React from 'react'
import './RecentSongs.scss'
import RecentCollection from '../RecentCollection/RecentCollection'

const RecentSongs = ({
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
        <div className="recent-songs">
            <div className="recent-songs-header">
                <div className="recent-header-items">
                    <span>Recent Songs</span>
                </div>
                <div>
                    <ion-icon name="pulse-outline"></ion-icon>
                </div>
            </div>
            <div className="recent-collection">
                {   
                    recentSongs.filter(song => song.recent === true ).map(song =>        
                        <RecentCollection
                        key={song.id}
                        song={song}
                    />
                )}
            </div>

        </div>
    )
}

export default RecentSongs
