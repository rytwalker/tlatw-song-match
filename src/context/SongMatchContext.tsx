import { useState, useContext, createContext, useMemo } from "react";

interface SongMatchProps {
  energy: number;
  danceability: number;
  instrumentalness: number;
  happiness: number;
  acousticness: number;
  tempo: number[];
  key: number[] | string[];
  mode: number[];
}

interface SMContext {
  songMatchValues: SongMatchProps;
  setSongMatchValues?: (songMatchValues: SongMatchProps) => void;
}

const defaultState: SongMatchProps = {
  energy: 0,
  danceability: 0,
  instrumentalness: 0,
  happiness: 0,
  acousticness: 0,
  tempo: [80, 180],
  key: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  mode: [0, 1],
};

export const SongMatchContext = createContext({
  songMatchValues: defaultState,
});

export const useSongMatch = () => useContext(SongMatchContext);

export const SongMatchProvider: React.FC = ({ children }) => {
  const [songMatchValues, setSongMatchValues] = useState(defaultState);
  const value = useMemo(() => ({ songMatchValues, setSongMatchValues }), [
    songMatchValues,
    setSongMatchValues,
  ]);
  return (
    <SongMatchContext.Provider value={value}>
      {children}
    </SongMatchContext.Provider>
  );
};
