import {findWinnerBetweenTwo} from '../helpers/game';

class JudgeController {
  /** @ngInject */
  constructor($rootScope) {
    this.winner = null;

    $rootScope.$on('RESULTS', (ev, results) => {
      const {human, machine} = results;

      this.winner = findWinnerBetweenTwo(human, machine);
    });
  }
}

export const Judge = {
  template: require('./judge.html'),
  controller: JudgeController
};
