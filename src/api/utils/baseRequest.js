import fetch from "node-fetch";

export default async function baseRequest({
  slug = "",
  method = "get",
  body = null,
  access_token,
}) {
  const options = {
    method,
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  if (body) {
    options.body = body;
    options.headers["Content-Type"] = "application/x-www-form-urlencoded";
  }

  return await fetch(`https://api.spotify.com/v1/${slug}`, options);
}
