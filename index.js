const bowling = require('./bowling');

const ballThrows = process.argv.slice(2).map(x => parseInt(x, 10));
const score = bowling.getScore(ballThrows);

console.log(score);