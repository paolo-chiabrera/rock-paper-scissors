import angular from 'angular';

import {playersModule} from './app/players/index';

import {main} from './app/main';
import {header} from './app/header';
import {footer} from './app/footer';

import './index.scss';

angular
  .module('app', [playersModule])
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainFooter', footer);
