import angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-grid';
import dimensionsModule from './dimensions/dimensions.module';
import statesModule from './states/states.module';
import appComponent from './app.component';
import appConfig from './app.config';
import './app.css';

angular
  .module('app', ['ui.router', 'ui.grid', dimensionsModule, statesModule])
  .config(appConfig)
  .component('app', appComponent);
