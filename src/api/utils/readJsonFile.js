import trackData from '../data/data.json';

const readJsonFile = (key) => {
  return trackData[key];
};

export const getAlbumsTracksAudioFeatures = () => {
  const { albums, tracks, audioFeatures } = trackData;

  return tracks.map((track) => {
    const trackAudioFeatures = audioFeatures.find(
      (af) => af.trackId === track.id
    );
    const trackAlbum = albums.find((album) => album.id === track.albumId);
    return {
      ...track,
      ...trackAudioFeatures,
      album: { ...trackAlbum },
    };
  });
};

export default readJsonFile;
