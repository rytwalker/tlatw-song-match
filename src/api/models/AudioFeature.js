import BaseModel from "./BaseModel";

import writeToJsonFile from "../utils/writeToJsonFile";

class AudioFeature {
  // static async find() {
  //   try {
  //     return await db("audio-features as af").join(
  //       "tracks as t",
  //       "t.id",
  //       "af.trackId"
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
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
