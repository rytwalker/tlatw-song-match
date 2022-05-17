import Track from "../../api/models/Track";

export default function handler(_req, res) {
  try {
    const tracks = Track.findRaw();
    res.status(200).json({ tracks, length: tracks.length });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
}
