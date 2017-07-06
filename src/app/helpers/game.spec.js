import {expect} from 'chai';

import {
  ROCK,
  PAPER,
  SCISSORS
} from '../shapes/index';

import {findWinnerBetweenTwo} from './game';

describe('Given the game helper', () => {
  const playerA = {
    name: 'A'
  };

  const playerB = {
    name: 'B'
  };

  describe('When playerA is invalid', () => {
    beforeEach(() => {
      playerA.shape = null;
      playerB.shape = SCISSORS;
    });

    it('Should throw an error', () => {
      const EXPECTED_ERROR = new Error('Invalid shape null');

      try {
        findWinnerBetweenTwo(playerA, playerB);
      } catch (e) {
        expect(e.message).to.equal(EXPECTED_ERROR.message);
      }
    });
  });

  describe('When playerA and playerB show the same shape', () => {
    beforeEach(() => {
      playerA.shape = SCISSORS;
      playerB.shape = SCISSORS;
    });

    it('Should find no winner', () => {
      expect(findWinnerBetweenTwo(playerA, playerB)).to.equal(null);
    });
  });

  describe('When playerA shows ROCK and playerB shows SCISSORS', () => {
    beforeEach(() => {
      playerA.shape = ROCK;
      playerB.shape = SCISSORS;
    });

    it('Should find playerA as winner', () => {
      expect(findWinnerBetweenTwo(playerA, playerB)).to.deep.equal(playerA);
    });
  });

  describe('When playerA shows ROCK and playerB shows PAPER', () => {
    beforeEach(() => {
      playerA.shape = ROCK;
      playerB.shape = PAPER;
    });

    it('Should find playerB as winner', () => {
      expect(findWinnerBetweenTwo(playerA, playerB)).to.deep.equal(playerB);
    });
  });

  describe('When playerA shows PAPER and playerB shows SCISSORS', () => {
    beforeEach(() => {
      playerA.shape = PAPER;
      playerB.shape = SCISSORS;
    });

    it('Should find playerB as winner', () => {
      expect(findWinnerBetweenTwo(playerA, playerB)).to.deep.equal(playerB);
    });
  });

  describe('When playerA shows PAPER and playerB shows ROCK', () => {
    beforeEach(() => {
      playerA.shape = PAPER;
      playerB.shape = ROCK;
    });

    it('Should find playerA as winner', () => {
      expect(findWinnerBetweenTwo(playerA, playerB)).to.deep.equal(playerA);
    });
  });

  describe('When playerA shows SCISSORS and playerB shows PAPER', () => {
    beforeEach(() => {
      playerA.shape = SCISSORS;
      playerB.shape = PAPER;
    });

    it('Should find playerB as winner', () => {
      expect(findWinnerBetweenTwo(playerA, playerB)).to.deep.equal(playerA);
    });
  });

  describe('When playerA shows SCISSORS and playerB shows ROCK', () => {
    beforeEach(() => {
      playerA.shape = SCISSORS;
      playerB.shape = ROCK;
    });

    it('Should find playerB as winner', () => {
      expect(findWinnerBetweenTwo(playerA, playerB)).to.deep.equal(playerB);
    });
  });
});
