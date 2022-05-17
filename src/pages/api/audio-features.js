const AudioFeature = require("../models/AudioFeature");

export default function handler(_req, res) {
  try {
    const audioFeatures = await AudioFeature.find();
    res.status(200).json({ audioFeatures, length: audioFeatures.length });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};