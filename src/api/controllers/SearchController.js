import Track from "../models/Track";
import {
  filterTempo,
  filterKey,
  filterMode,
  addAudioFeature,
  scoreSort,
} from "../helpers/searchHelpers";

class SearchController {
  static async query(req, res) {
    try {
      if (Object.keys(req.body).length === 0) {
        return res
          .status(400)
          .json({ message: "This request requires a body." });
      }

      const {
        energy,
        danceability,
        instrumentalness,
        happiness,
        acousticness,
        tempo,
        mode,
        keys,
      } = req.body;

      const tracks = Track.find();

      // FILTERS
      const filteredTracks = tracks
        .filter((track) => filterTempo(track.tempo, tempo))
        .filter((track) => filterKey(track.key, keys))
        .filter((track) => filterMode(track.mode, mode));

      // SORTS and SCORING
      const withHappiness = addAudioFeature(
        filteredTracks,
        happiness,
        "valence",
        "happinessScore"
      );

      const withEnergy = addAudioFeature(
        withHappiness,
        energy,
        "energy",
        "energyScore"
      );

      const withDanceability = addAudioFeature(
        withEnergy,
        danceability,
        "danceability",
        "dancabilityScore"
      );

      const withAcousticness = addAudioFeature(
        withDanceability,
        acousticness,
        "acousticness",
        "acousticnessScore"
      );

      const withInstrumentalness = addAudioFeature(
        withAcousticness,
        instrumentalness,
        "instrumentalness",
        "instrumentalnessScore"
      );

      const sortedTracks = withInstrumentalness.sort(scoreSort);

      res.status(200).json({
        length: sortedTracks.length,
        tracks: sortedTracks,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Oop something went wrong." });
    }
  }
}

module.exports = SearchController;
