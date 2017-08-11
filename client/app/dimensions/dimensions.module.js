import angular from 'angular';
import dimensionsComponent from './dimensions.component';

const dimensionsModule = angular
  .module('dimensions', [])
  .component('dimensions', dimensionsComponent);

export default dimensionsModule.name;
