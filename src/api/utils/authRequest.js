import fetch from "node-fetch";
import btoa from "btoa";

export default async function ({
  url = "https://accounts.spotify.com/api/token",
  method = "get",
  body = null,
}) {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const headerToken = btoa(clientId + ":" + clientSecret);
  const options = {
    method,
    headers: {
      Authorization: `Basic ${headerToken}`,
    },
  };

  if (body) {
    options.body = body;
    options.headers["Content-Type"] = "application/x-www-form-urlencoded";
  }

  return await fetch(url, options);
}
