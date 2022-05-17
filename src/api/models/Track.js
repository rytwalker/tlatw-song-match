import writeToJsonFile from "../utils/writeToJsonFile";
import readJsonFile, {
  getAlbumsTracksAudioFeatures,
} from "../utils/readJsonFile";

const USEABLE_ALBUMS = [1, 2, 3, 4, 5, 6, 9, 10];

class Track {
  static find() {
    const tracks = getAlbumsTracksAudioFeatures();
    return tracks;
  }

  static findRaw() {
    return readJsonFile("tracks");
  }

  static async insert(tracks) {
    try {
      const jsonData = await writeToJsonFile(tracks, "tracks");
      return jsonData;
    } catch (error) {
      console.log(error);
    }
  }
  // static async remove(id) {
  //   try {
  //     await db("tracks").where({ id }).del();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}

export default Track;
