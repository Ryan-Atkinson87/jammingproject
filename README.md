# Codecademy Jammming Project

Original project can be found [here](https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-front-end-development/tracks/fscj-22-react-part-ii/modules/wdcp-22-jammming-54dd6aa4-39da-42be-989f-67a12f65b1a8/kanban_projects/jammming-react18)

## Purpose

The aim of this application was to create an application that uses the Spotify API to search for songs, matching either song name, artist or album. Within the app itself you can then add whichever songs you like to a playlist and give the playlist a name. This playlist can then be sent to the Spotify API and made available the user from their spotify account.

## Features
- Search Spotify for matching songs to a given keyword
- Create a new playlist
- Give the playlist a name
- Send the playlist to Spotify

## Setup and general information
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The following command was used:
```
npx create-react-app jammingproject
```

When forking or cloning the repository it may be necessary to update the dependencies using the `package.json` file, using the following command
```
npm install
```

In the project directory, you can run up the server using:

```
npm start
```

The page will reload when you make changes.\
You may also see any lint errors in the console.

In `src/api/` there is a file called `spotify.js` which is incuded in the `.gitignore` as this contains login credentials. You will need to recreate this folder with the following information:

```javascript
const credentials = {
  clientID: '', // your client ID from spotify
  clientSecret: '', // your client secret from spotify
  redirectURI: 'http://localhost:3000/callback',
  scope: ['playlist-modify-private playlist-modify-public'],
  userID: '', // your user ID from spotify
  playlistEndpoint: `https://api.spotify.com/v1/users/[your user id]/playlists` // don't forget to replace [your user ID] with your userID
}

export default credentials;
```

To work with the spotify API you will need to sign up to use the [Spotify](https://developer.spotify.com) dev tools and create your own web app on their system in order to access client details.


## Future Work

There are quite a number of redundant files and non-optimised scripts within this repository, possible further work would include removing and optimising these.