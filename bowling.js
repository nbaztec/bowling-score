const NUM_PINS = 10;
const FRAMES_PER_ROUND = 10;
const MAX_TURNS = 12;

function getScore(ballThrows) {
    let score = 0;
    let bonus = Array(MAX_TURNS).fill(0);

    let turn = 0;
    let frames = 0;
    let lastPins = 0;

    for (let i = 0; i < ballThrows.length; i++, turn = (turn + 1) % 2) {
        if (turn === 0) {
            frames++;
        }

        const pins = ballThrows[i];
        // console.log(i, pins, frames);

        score += pins + pins * bonus[i];
        lastPins = pins;

        if (frames === FRAMES_PER_ROUND) {
            continue;
        }

        if (turn === 0 && pins === NUM_PINS) {
            turn = 1;   // end turn
            bonus[i+1]++;
            bonus[i+2]++;

            continue;
        }

        if (turn === 1 && (pins + lastPins) === NUM_PINS) {
            bonus[i+1]++;
        }
    }

    return score;
}
//
// const score = getScore([
//     10,
//     10,
//     10,
//     10,
//     10,
//     10,
//     10,
//     10,
//     10,
//     10,
//
//     10,
//     10,
// ]);
//
// console.log(score);

module.exports = {
    getScore,
};