function createScoreBoard() {
  const scoreBoard = {'The Best Ever': 1000000};
  return scoreBoard;
}

function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

function removePlayer(scoreBoard, player) {
  if (player in scoreBoard){
    delete scoreBoard[player];
  }
  return scoreBoard;
}

function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points;
  return scoreBoard;
}

function applyMondayBonus(scoreBoard) {
  for (let key in scoreBoard){
    scoreBoard[key] += 100;
  }
  return scoreBoard;
}

function normalizeScore(params) {
  return params.normalizeFunction(params['score']);
}

export {createScoreBoard, addPlayer, removePlayer, updateScore, applyMondayBonus, normalizeScore};
