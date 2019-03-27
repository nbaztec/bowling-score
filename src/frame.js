const Strike = Symbol('strike');
const Spare = Symbol('spare');
const Normal = Symbol('normal');


const NUM_PINS = 10;


const FRAMES_PER_ROUND = 10;
const MAX_TURNS = 12;

class BonusScore {
    constructor() {
        this._bonusTurns = Array(MAX_TURNS).fill(0);
    }

    add(turn) {
        this._bonusTurns[turn] += 1;
    }

    consume(turn) {
        return this._bonusTurns[turn];
    }
}

class Frames {
    constructor() {
        this._frames = [];
    }

    add(turns) {
        if (this.completed()) {
            throw new Error(`max allowed frames: ${FRAMES_PER_ROUND}`);
        }

        this._frames.push(turns);
    }

    completed() {
        return this._frames.length === FRAMES_PER_ROUND;
    }
}

function makeFrames(turns) {
    const frames = new Frames();

    let score = 0;
    // let bonusTurns = Array(MAX_TURNS).fill(0);

    const bonus = new BonusScore();

    for (let i=0; i<turns.length; i++) {

        const pins1 = turns[i];
        console.log(pins1);
        score += pins1 * bonus.consume(i);

        if (pins1 === NUM_PINS) {
            if (frames.completed()) {
                continue;
            }

            score += NUM_PINS;
            bonus.add(i + 1);
            bonus.add(i + 2);

            frames.add([NUM_PINS]);

            console.log(`${(i+1).toString().padStart(2, '0')} : ${score} - ${bonus._bonusTurns}`);

            continue;
        }

        if (i === turns.length) {
            throw new Error('invalid throw: sequence incomplete');
        }

        // @todo: isn't executed when last bonus throw. handle one throw per loop.

        i += 1 ;
        const pins2 = turns[i];
        console.log(pins2);
        score += pins2 * bonus.consume(i);

        if (pins1 + pins2 === NUM_PINS) {
            if (frames.completed()) {
                continue;
            }

            score += NUM_PINS;
            bonus.add(i + 1);
            frames.add([NUM_PINS]);
        }

        if (frames.completed()) {
            continue;
        }

        score += pins1 + pins2;
        frames.add([NUM_PINS]);
    }

    return score;
}

const score = makeFrames([
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,

    10,
    8,
]);

console.log(score);