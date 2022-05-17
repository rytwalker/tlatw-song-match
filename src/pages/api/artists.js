import Artist from "../../api/models/Artist";

export default function handler(_req, res) {
  try {
    const artists = Artist.find();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
}
