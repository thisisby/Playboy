import React, {useState, useRef} from 'react'
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// data
import chillhop from './data'

// Components
import Sidebar from './components/Sidebar/Sidebar';


//Pages
import Home from './pages/Home'
import Recent from './pages/Recent';

function App() {

  //useStates
  const [songs, setSongs] = useState(chillhop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [recentSongs, setRecentSongs] = useState([]);
  const [likeSong, setLikeSong] = useState()
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  
  // useRef
  const audioRef = useRef(null);

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact >
            <Home
              songs={songs}
              setSongs={setSongs}
              setCurrentSong={setCurrentSong}
              currentSong={currentSong}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              songInfo={songInfo}
              setSongInfo={setSongInfo}
              audioRef={audioRef}
              setRecentSongs={setRecentSongs}
              recentSongs={recentSongs}
              likeSong={likeSong}
              setLikeSong={setLikeSong}
            />
          </Route>
          <Route path="/recent" >
            <Recent
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
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
