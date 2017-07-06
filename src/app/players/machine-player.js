import {PlayerController} from './player';

import {getRandomShape} from '../helpers/game';

class MachinePlayerController extends PlayerController {
  /** @ngInject */
  constructor($scope, $rootScope) {
    super();

    this.playerType = 'machine';

    $rootScope.$on('HUMAN', (ev, human) => {
      this.selectedShape = getRandomShape();

      $scope.$emit('RESULTS', {
        human,
        machine: {
          playerType: this.playerType,
          shape: this.selectedShape
        }
      });
    });
  }

  _onClick() {}
}

export const MachinePlayer = {
  template: require('./player.html'),
  controller: MachinePlayerController
};
