import {
  ROCK,
  PAPER,
  SCISSORS
} from '../shapes/index';

export function checkPlayer(player) {
  if (!player) {
    throw new Error('Invalid player');
  }

  if (!player.shape || !(player.shape === ROCK || player.shape === PAPER || player.shape === SCISSORS)) {
    throw new Error(`Invalid shape ${player.shape}`);
  }
}

export function findWinnerBetweenTwo(playerA, playerB) {
  checkPlayer(playerA);
  checkPlayer(playerB);

  if (playerA.shape === playerB.shape) {
    return null;
  }

  if (playerA.shape === ROCK) {
    return (playerB.shape === SCISSORS) ? playerA : playerB;
  }

  if (playerA.shape === SCISSORS) {
    return (playerB.shape === PAPER) ? playerA : playerB;
  }

  if (playerA.shape === PAPER) {
    return (playerB.shape === ROCK) ? playerA : playerB;
  }

  return null;
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomShape() {
  const SHAPES = [ROCK, PAPER, SCISSORS];
  const index = getRandomInt(0, SHAPES.length - 1);

  return SHAPES[index];
}
