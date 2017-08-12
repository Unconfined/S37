class StatesController {
  constructor() {
    //TODO: Use MongoDB instead of in memory states
    //TODO: Use Save State feature (208)
    //TODO: Use cellEditableCondition to disable editing of state col
    //TODO: Add form validation
    //TODO: use gridOptions to implement deletion of row
  }

  $onInit() {
    this.newState = {
      name: '',
      capital: ''
    };
    this.states = [
      { name: 'California', capital: 'Sacremento' },
      { name: 'Alabama', capital: 'Montgomery' },
      { name: 'Arizona', capital: 'Phoenix' },
      { name: 'Florida', capital: 'Tallahassee' },
      { name: 'Idaho', capital: 'Boise' },
      { name: 'Oregon', capital: 'Salem' },
      { name: 'Texas', capital: 'Austin' },
      { name: 'Louisiana', capital: 'Baton Rouge' },
      { name: 'Kansas', capital: 'Topeka' }
    ];
  }

  addState(state) {
    this.states.push(state);
  }

  deleteState(index) {
    this.states.splice(index, 1);
  }
}

export default StatesController;
