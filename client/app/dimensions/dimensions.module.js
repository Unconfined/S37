import angular from 'angular';
import dimensionsComponent from './dimensions.component';
import metricsComponent from './metrics/metrics.component';

const dimensionsModule = angular
  .module('dimensions', [])
  .component('dimensions', dimensionsComponent)
  .component('metrics', metricsComponent);

export default dimensionsModule.name;
