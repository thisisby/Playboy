
export const playAudio = (isPlaying, audioRef, set) => {
    if(isPlaying) {
        const playPromise = audioRef.current.play();
        if(playPromise !== undefined) {
            playPromise.then((audio) => {
                audioRef.current.play();
            })
        }
    }
}