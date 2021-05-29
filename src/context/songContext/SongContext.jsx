import React, { useState, createContext } from "react";

//Import data
import chillhop from "../../data.js";

export const SongContext = createContext();

export const SongProvider = (props) => {
  const [songs, setSongs] = useState(chillhop());

  return (
    <SongContext.Provider value={[songs, setSongs]}>
      {props.children}
    </SongContext.Provider>
  );
};

export default SongContext;
