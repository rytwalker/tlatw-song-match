import jsonfile from "jsonfile";

const readJsonFile = (key) => {
  const jsonFile = jsonfile.readFileSync("./src/api/data/data.json");
  return jsonFile[key];
};

export const getAlbumsTracksAudioFeatures = () => {
  const jsonFile = jsonfile.readFileSync("./src/api/data/data.json");
  const { albums, tracks, audioFeatures } = jsonFile;

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
