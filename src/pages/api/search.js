import SearchController from "../../api/controllers/SearchController";

export default function handler(req, res) {
  if (req.method === "POST") {
    SearchController.query(req, res);
  }
}
