import writeToJsonFile from "../utils/writeToJsonFile";
import readJsonFile from "../utils/readJsonFile";
class AudioFeature {
  static find() {
    return readJsonFile("audioFeatures");
  }

  static insert(audioFeatures) {
    try {
      const jsonData = writeToJsonFile(audioFeatures, "audioFeatures");
      return jsonData;
    } catch (error) {
      console.log(error);
    }
  }
  // static async remove(id) {
  //   try {
  //     await db("audio-features").where({ id }).del();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}

export default AudioFeature;
