const Artist = require("../models/Artist");

export default function handler(_req, res) {
  try {
    const artists = await Artist.find();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};