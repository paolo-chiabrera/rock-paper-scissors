import {
  ROCK,
  PAPER,
  SCISSORS
} from '../shapes/index';

export class PlayerController {
  /** @ngInject */
  constructor() {
    this.selectedShape = null;
    this.shapes = [ROCK, PAPER, SCISSORS];
  }
}
