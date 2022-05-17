import jsonfile from "jsonfile";
import readJsonFile from "../utils/readJsonFile";

const writeToJSONFile = async (obj) => {
  try {
    const jsonFile = await jsonfile.readFile("./src/api/data/data.json");
    const newFile = await jsonfile.writeFile("./src/api/data/data.json", {
      ...jsonFile,
      ...obj,
    });
    return newFile;
  } catch (error) {
    console.error(error);
  }
};

const getAlbums = async () => {
  const jsonFile = await jsonfile.readFile("./src/api/data/data.json");
  return jsonFile.albums;
};

class Album {
  static find() {
    return readJsonFile("albums");
  }

  static async insert(albums) {
    try {
      const jsonFile = await writeToJSONFile(albums);
      return jsonFile;
    } catch (error) {
      console.log(error);
    }
  }

  // static async remove(id) {
  //   try {
  //     await db("albums").where({ id }).del();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}

export default Album;
