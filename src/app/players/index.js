import angular from 'angular';

import {HumanPlayer} from './human-player';
import {MachinePlayer} from './machine-player';
import {Judge} from './judge';

export const playersModule = 'players';

angular
  .module(playersModule, [])
  .component('judge', Judge)
  .component('machinePlayer', MachinePlayer)
  .component('humanPlayer', HumanPlayer);
