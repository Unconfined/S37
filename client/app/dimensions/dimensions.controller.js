class DimensionsController {
  constructor($window, $scope) {
    this.$window = $window;
    this.$scope = $scope;
  }

  $onInit() {
    this.width = this.$window.innerWidth;
    this.height = this.$window.innerHeight;
    this.$window.onresize = this.setDimensions.bind(this);
  }

  $onDestroy() {
    this.$window.onresize = null;
  }

  setDimensions() {
    // TODO: Reduce digest cycles
    this.width = this.$window.innerWidth;
    this.height = this.$window.innerHeight;

    this.$scope.$apply();
  }
}

export default DimensionsController;
