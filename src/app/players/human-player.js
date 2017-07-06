import {PlayerController} from './player';

class HumanPlayerController extends PlayerController {
  /** @ngInject */
  constructor($scope) {
    super();

    this.$scope = $scope;

    this.playerType = 'human';
  }

  _onClick(shape) {
    this.selectedShape = shape;

    this.$scope.$emit('HUMAN', {
      playerType: this.playerType,
      shape
    });
  }
}

export const HumanPlayer = {
  template: require('./player.html'),
  controller: HumanPlayerController
};
