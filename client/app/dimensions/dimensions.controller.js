class DimensionsController {
  constructor($window) {
    this.window = $window;
  }

  $onInit() {
    this.setDimensions();
    this.updateDimensions();
  }

  setDimensions() {
    this.height = this.window.innerHeight;
    this.width = this.window.innerWidth;
  }

  updateDimensions() {
    this.window.onresize = this.setDimensions;
  }
}

export default DimensionsController;
