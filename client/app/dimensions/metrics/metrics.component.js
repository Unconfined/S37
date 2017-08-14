import template from './metrics.html';
import controller from './metrics.controller';
import './metrics.css';

// TODO: Decide if this component is relevant

const metricsComponent = {
  bindings: {
    width: '<',
    height: '<'
  },
  template,
  controller
};

export default metricsComponent;
