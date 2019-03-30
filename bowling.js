const NUM_PINS = 10;
const FRAMES_PER_ROUND = 10;
const MAX_TURNS_PER_FRAME = 2;
const MAX_BONUS_THROWS = 2;
const MAX_THROWS = FRAMES_PER_ROUND * MAX_TURNS_PER_FRAME + MAX_BONUS_THROWS;

function getScore(ballThrows) {
  let score = 0;
  const bonus = Array(MAX_THROWS).fill(0);

  let turn = 0;
  let frames = 0;
  let lastPins = 0;

  for (let i = 0; i < ballThrows.length; i += 1, turn = (turn + 1) % MAX_TURNS_PER_FRAME) {
    if (turn === 0) {
      frames += 1;
    }

    const pins = ballThrows[i];

    score += pins + pins * bonus[i];

    if (frames === FRAMES_PER_ROUND) {
      continue;
    }

    if (turn === 0 && pins === NUM_PINS) { // strike
      lastPins = 0;
      turn = 1; // end turn
      bonus[i + 1] += 1;
      bonus[i + 2] += 1;

      continue;
    }

    if (turn === 1 && (pins + lastPins) === NUM_PINS) { // spare
      lastPins = 0;
      bonus[i + 1] += 1;
    }

    lastPins = pins;
  }

  return score;
}

module.exports = {
  getScore,
};
