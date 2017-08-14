class StatesController {
  constructor(statesService) {
    this.statesService = statesService;
    //TODO: Use MongoDB instead of in memory states
    //TODO: Use Save State feature (208)
    //TODO: Use cellEditableCondition to disable editing of state col
    //TODO: Add form validation
  }

  $onInit() {
    this.states = this.statesService.states;

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
        name: 'Delete',
        cellTemplate:
          '<button class="delete is-medium" ng-click="grid.appScope.deleteState(row)"></button>'
      }
    ];

    this.gridOptions = {
      data: this.states,
      columnDefs: this.columnDefitions,
      appScopeProvider: this
    };
  }

  addState(state) {
    this.states.unshift(state);
  }

  deleteState(row) {
    const index = this.gridOptions.data.indexOf(row.entity);
    this.gridOptions.data.splice(index, 1);
  }
}

export default StatesController;
