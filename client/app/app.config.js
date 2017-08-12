import landingTemplate from './landing/landing.html';
import statesTemplate from './states/states.html';

const appConfig = ($stateProvider, $urlRouterProvider) => {
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
    component: 'states'
  };

  $stateProvider.state(dimensionsState);
  $stateProvider.state(landingState);
  $stateProvider.state(statesState);
  $urlRouterProvider.otherwise('/landing');
};

export default appConfig;
