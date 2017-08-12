import angular from 'angular';
import statesComponent from './states.component';
import './states.css';

const statesModule = angular
  .module('states', [])
  .component('states', statesComponent);

export default statesModule.name;
