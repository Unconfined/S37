import angular from 'angular';
import 'angular-ui-grid';
import statesComponent from './states.component';
import statesService from './states.service';
import './states.css';

const statesModule = angular
  .module('states', ['ui.grid', 'ui.grid.edit'])
  .component('states', statesComponent)
  .factory('statesService', statesService);

export default statesModule.name;
