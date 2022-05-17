import jsonfile from "jsonfile";

const writeToJsonFile = async (obj, nestedKey) => {
  try {
    const jsonFile = jsonfile.readFileSync("./src/api/data/data.json");

    if (!jsonFile[nestedKey]) {
      jsonFile[nestedKey] = [];
    }

    const updatedFile = {
      ...jsonFile,
      [nestedKey]: [...jsonFile[nestedKey], obj],
    };

    const newFile = jsonfile.writeFileSync(
      "./src/api/data/data.json",
      updatedFile
    );
    return newFile;
  } catch (error) {
    console.error(error);
  }
};

export default writeToJsonFile;
