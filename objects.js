let playlist = {"Yes", "Owner of a Lonely Heart"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}

function deletePlaylist(playlist, artistName) {
  delete playlist[artistName];
}