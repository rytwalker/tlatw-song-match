import { useState, useContext, createContext, useMemo } from "react";

interface Song {
  name: string;
  album: string;
  previewUrl: string;
  spotifyUrl: string;
  albumThumbnail?: string;
  id: string;
}

interface SContext {
  songs?: Song[] | null;
  setSongs?: (songs: Song[]) => void;
}

const defaultState: SContext = {
  songs: null,
};

export const SongContext = createContext(defaultState);

export const useSongs = () => useContext(SongContext);

export const SongProvider: React.FC = ({ children }) => {
  const [songs, setSongs] = useState(defaultState.songs);
  const value = useMemo(() => ({ songs, setSongs }), [songs, setSongs]);
  return <SongContext.Provider value={value}>{children}</SongContext.Provider>;
};
