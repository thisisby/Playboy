import React from 'react'

// Context
// import {SongContext} from '../../context/songContext/SongContext'

const SongBox = ({
    song,
    setSongs,
    setCurrentSong,
    type,
    id,
    songs,
    isPlaying,
    setIsPlaying,
    audioRef,
    currentSong,
    recentSongs,
    setRecentSongs,
    likeSong,
    setLikeSong,
}) => {

    // const [currentSong, setCurrentSong] = useContext(SongContext);
    

    const songHandler = async () => {
        const selectedSong = songs.filter((state) => state.id === id)
        await setCurrentSong(selectedSong[0]);

        // Toggling the active Song
        const newSong = songs.map((song) => {
            if(song.id === id) {
                return{
                    ...song,
                    active: true,
                    recent: true,
                }
            }
            else{
                return{
                    ...song,
                    active: false,
                }
            }
        });
        console.log(newSong);
        setSongs(newSong);
        setRecentSongs(newSong)

        // const newRecentSongs = songs.map((song) => {
        //     if(song.id === id) {
        //         return{
        //             ...song,
        //             recent: true
        //         }   
        //     }
        //     else{
        //         return{
        //             ...song,
        //         }
        //     }
        // });
        // console.log(newRecentSongs)
        
        // setRecentSongs(newRecentSongs)
   
        //Play audio
        if(isPlaying) {
            audioRef.current.play();
        }
        }

        return (
        <>
        <div className="collectopn-content-item">
            <div className="content-item-img" style={{ backgroundImage: `url(${song.cover})` }} >
                <button onClick={songHandler} className="play-music">
                    {
                        song.active
                        ?
                            <lord-icon
                                src="https://cdn.lordicon.com/kvsszuvz.json"
                                trigger="loop"
                                colors="primary:#fa881c,secondary:#242424"
                                stroke="79"
                                scale="78"
                                style={{width: "100%", height: "100%"}}
                            />
                        :                        
                            <ion-icon name="play-outline"></ion-icon>
                    } 

            </button>
            </div>
            <p>{song.name}</p>
            <span> {song.artist} </span>   
            {/* <button >Like</button>         */}
        </div>   
        </>
    )
}

export default SongBox
