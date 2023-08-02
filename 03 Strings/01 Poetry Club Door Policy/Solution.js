function frontDoorResponse(line) {
  return line[0];
}

function frontDoorPassword(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function backDoorResponse(line) {
  return line.trim()[line.trim().length - 1];
}

function backDoorPassword(word) {
  return frontDoorPassword(word) + ", please";
}

export {frontDoorResponse, frontDoorPassword, backDoorResponse, backDoorPassword};
