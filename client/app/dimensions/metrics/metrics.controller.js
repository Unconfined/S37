class MetricsController {
  constructor() {}

  $onChanges(changes) {
    if (changes.width && changes.height) {
      this.width = angular.copy(changes.width.currentValue);
      this.height = angular.copy(changes.height.currentValue);
    }
  }
}

export default MetricsController;
