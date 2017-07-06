import angular from 'angular';
import 'angular-mocks';
import {main} from './main';

describe('main component', () => {
  beforeEach(() => {
    angular
      .module('app', ['app/main.html'])
      .component('app', main);
    angular.mock.module('app');
  });

  it('should render the header, human-player, judge, machine-player and footer', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    expect(element.find('fountain-header').length).toEqual(1);
    expect(element.find('human-player').length).toEqual(1);
    expect(element.find('judge').length).toEqual(1);
    expect(element.find('machine-player').length).toEqual(1);
    expect(element.find('fountain-footer').length).toEqual(1);
  }));
});
