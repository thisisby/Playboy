import React from 'react'
import './RecentCollection.scss'

const RecentCollection = ({
    song
}) => {
    return (
        <div className="recent-collection-item">
            <div className="recent-col-head">
                <div className="recent-collection-img" style={{ backgroundImage: `url(${song.cover})` }} />
                <div className="recent-collection-title">
                    <span>{song.name}</span>
                    <span>{song.artist}</span>
                </div>
            </div>
            <div className="recent-col-end">
                <span>12:10</span>
                <button>
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
                        <ion-icon name="play"></ion-icon>
                } 
                </button>
                <button>
                    <ion-icon name="trash-bin"></ion-icon>
                </button>
            </div>
        </div>
    )
}

export default RecentCollection
