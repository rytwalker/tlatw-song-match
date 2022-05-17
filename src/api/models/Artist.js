import jsonfile from "jsonfile";
import readJsonFile from "../utils/readJsonFile";

const writeToJSONFile = async (obj) => {
  try {
    const jsonFile = await jsonfile.writeFile("./src/api/data/data.json", obj, {
      flag: "a",
    });
    return jsonFile;
  } catch (error) {
    console.error(error);
  }
};

class Artist {
  static find() {
    return readJsonFile("albums");
  }

  static async insert({ name, spotifyId, spotifyUrl, followers }) {
    try {
      const jsonData = await writeToJSONFile({
        artists: [
          {
            name,
            spotifyId,
            spotifyUrl,
            followers,
          },
        ],
      });
      return jsonData;
    } catch (error) {
      console.log(error);
    }
  }
}

export default Artist;
