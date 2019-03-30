const { expect } = require('chai');
const bowling = require('./bowling');

describe('bowling.getscore', () => {
  const testCases = [
    {
      name: 'perfect score',
      input: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      expect: 300,
    },
    {
      name: 'perfect frame w/ 2 bonus throws = 0',
      input: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0],
      expect: 270,
    },
    {
      name: 'perfect frame w/ 2 bonus throws as spare',
      input: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 8, 2],
      expect: 288,
    },
    {
      name: 'perfect frame w/ 2 bonus throws',
      input: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 2],
      expect: 282,
    },
    {
      name: 'normal frame w/ 1 bonus throw:strike',
      input: [10, 10, 10, 10, 10, 10, 10, 10, 10, 8, 2, 10],
      expect: 278,
    },
    {
      name: 'normal frame w/ 1 bonus throw:0',
      input: [10, 10, 10, 10, 10, 10, 10, 10, 10, 8, 2, 0],
      expect: 268,
    },
    {
      name: 'normal frame w/ 1 bonus throw:normal',
      input: [10, 10, 10, 10, 10, 10, 10, 10, 10, 8, 2, 8],
      expect: 276,
    },
    {
      name: 'nil score w/ last strike and bonus',
      input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],
      expect: 30,
    },
    {
      name: 'nil score w/ last spare and bonus',
      input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 10],
      expect: 20,
    },
    {
      name: 'nil score',
      input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      expect: 0,
    },
    {
      name: 'normal frame',
      input: [10, 10, 10, 10, 10, 10, 10, 10, 10, 8, 2],
      expect: 268,
    },
    {
      name: 'normal frame',
      input: [9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0],
      expect: 90,
    },
    {
      name: 'spare frame',
      input: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      expect: 150,
    },
    {
      name: 'normal frame',
      input: [2, 8, 10, 4, 0, 6, 3, 7, 3, 10, 10, 0, 0, 1, 8, 2, 1],
      expect: 109,
    },
  ];

  testCases.forEach((t) => {
    it(`should score ${t.expect} given ${t.name} : ${t.input.join(',')}`, () => {
      const score = bowling.getScore(t.input);
      expect(score).to.equal(t.expect);
    });
  });
});
