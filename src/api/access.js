import credentials from "./spotify.js";

const clientID = credentials.clientID; // Replace with your client ID
const client_secret = credentials.clientSecret; // Replace with your client secret
const redirectURI = credentials.redirectURI; // Replace with your redirect URI
const userID = credentials.userID; // Replace with your user ID
const scope = credentials.scope; // Replace with your scope

const authorizeSpotify = () => {
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const responseType = "token";

  const authUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${encodeURIComponent(
    redirectURI
  )}&scope=${encodeURIComponent(scope)}&response_type=${responseType}`;

  // Redirect user to Spotify authorization page
  window.location = authUrl;
};

export const getAccessToken = () => {
  // Check if token is already available in local storage
  let token = localStorage.getItem("spotify_access_token");
  const expiresAt = localStorage.getItem("spotify_token_expiration");

  if (token && new Date().getTime() < expiresAt) {
    return token;
  }

  // If not, check if URL has the token (after redirect)
  const hash = window.location.hash;
  if (!token && hash) {
    const params = new URLSearchParams(hash.substring(1));
    token = params.get("access_token");
    const expiresIn = parseInt(params.get("expires_in"));

    // Save token and expiration time
    localStorage.setItem("spotify_access_token", token);
    localStorage.setItem(
      "spotify_token_expiration",
      new Date().getTime() + expiresIn * 1000
    );

    // Clear URL hash
    window.location.hash = "";

    return token;
  }

  // If token not available, redirect for authorization
  if (!token) {
    authorizeSpotify();
  }
};

export default getAccessToken ;