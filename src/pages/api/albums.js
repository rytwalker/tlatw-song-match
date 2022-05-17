import Album from "../../api/models/Album";

export default function handler(_req, res) {
  try {
    const albums = Album.find();
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
}
