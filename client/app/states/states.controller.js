class StatesController {
  constructor(statesService) {
    this.statesService = statesService;
    //TODO: Use MongoDB instead of in memory states
    //TODO: Use Save State feature (208)
    //TODO: Use cellEditableCondition to disable editing of state col
    //TODO: Add form validation
  }

  $onInit() {
    this.states = this.statesService.getStates();

    this.newState = {
      state: '',
      capital: ''
    };

    this.columnDefitions = [
      {
        name: 'state'
      },
      {
        name: 'capital'
      },
      {
        name: 'X',
        cellTemplate:
          '<button class="delete is-medium" ng-click="grid.appScope.deleteState(row)"></button>',
        maxWidth: 35
      }
    ];

    this.gridOptions = {
      data: this.states,
      columnDefs: this.columnDefitions,
      appScopeProvider: this
    };
  }

  addState(state) {
    this.statesService.addState(state);
  }

  deleteState(stateRow) {
    this.statesService.deleteState(stateRow);
  }
}

export default StatesController;
