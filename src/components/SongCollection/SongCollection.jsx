import React from 'react'
import {Link} from 'react-router-dom'
import './SongCollection.scss'
import SongBox from '../SongBox/SongBox'

// import {SongContext} from '../../context/songContext/SongContext'

const SongCollection = ({
    songs,
    setSongs,
    setCurrentSong,
    type,
    isPlaying,
    setIsPlaying,
    audioRef,
    currentSong,
    recentSongs,
    setRecentSongs,
    likeSong,
    setLikeSong,
}) => {



    // const [songs, setSongs] = useContext(SongContext);    

    return (
        <div className="content-collection">
            <div className="content-collection-header">
                <h2>{type}</h2>
                <Link to="">See all</Link>
            </div>
            <div className="content-collection-content">

                {
                    type === 'All songs' 
                        ? songs.map(song => (
                            <SongBox 
                                key={song.id} 
                                id={song.id} 
                                song={song} 
                                setSongs={setSongs}
                                setCurrentSong={setCurrentSong}
                                songs={songs}
                                isPlaying={isPlaying}
                                setIsPlaying={setIsPlaying}
                                audioRef={audioRef}
                                currentSong={currentSong}
                                recentSongs={recentSongs}
                                setRecentSongs={setRecentSongs}
                                likeSong={likeSong}
                                setLikeSong={setLikeSong}
                            />
                        ))
                        : songs.filter(song => song.type === type).map((song) => (
                            <SongBox 
                                key={song.id} 
                                id={song.id} 
                                song={song} 
                                setSongs={setSongs}
                                setCurrentSong={setCurrentSong}
                                songs={songs}
                                isPlaying={isPlaying}
                                setIsPlaying={setIsPlaying}
                                audioRef={audioRef}
                                currentSong={currentSong}
                                recentSongs={recentSongs}
                                setRecentSongs={setRecentSongs}
                                likeSong={likeSong}
                                setLikeSong={setLikeSong}
                            />
                        ))
                }
            </div>
        </div>
    )
}

export default SongCollection

