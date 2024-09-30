import credentials from "./spotify.js";
import axios from "axios";

const client_id = credentials.clientID; // Replace with your client ID
const client_secret = credentials.clientSecret; // Replace with your client secret

const getToken = async () => {
  const authOptions = {
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: new URLSearchParams({
      grant_type: 'client_credentials'
    })
  };

  try {
    const response = await axios(authOptions);  // Await the API call
    return response.data.access_token;  // Return the access token
  } catch (error) {
    console.error('Failed to get token:', error.response ? error.response.data : error.message);
    return null; // Handle errors and return null in case of failure
  }
};

// Testing token can be accessed outside of the function
/*
const main = async () => {
  const token = await getToken();  // Await the token to be fetched
  if (token) {
    console.log('Access Token:', token);  // Use the token
  } else {
    console.log('Failed to retrieve access token');
  }
};

main(); // returns the access token
*/

export default getToken;

