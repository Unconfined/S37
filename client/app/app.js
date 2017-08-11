import angular from 'angular';
import 'angular-ui-router';

import dimensionsModule from './dimensions/dimensions.module';

import statesTemplate from './states/states.html';
import landingTemplate from './landing/landing.html';

angular
  .module('app', ['ui.router', dimensionsModule])
  .config(($stateProvider, $urlRouterProvider) => {
    let landingState = {
      name: 'landing',
      url: '/landing',
      template: landingTemplate
    };

    let dimensionsState = {
      name: 'dimensions',
      url: '/dimensions',
      component: 'dimensions'
    };

    let statesState = {
      name: 'states',
      url: '/states',
      templateUrl: statesTemplate
    };

    $stateProvider.state(dimensionsState);
    $stateProvider.state(landingState);
    $stateProvider.state(statesState);
    $urlRouterProvider.otherwise('/dimensions');
  });
