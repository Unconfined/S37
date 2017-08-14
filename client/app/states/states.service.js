const statesService = $http => {
  let states = [
    { state: 'California', capital: 'Sacremento' },
    { state: 'Alabama', capital: 'Montgomery' },
    { state: 'Arizona', capital: 'Phoenix' },
    { state: 'Florida', capital: 'Tallahassee' },
    { state: 'Idaho', capital: 'Boise' },
    { state: 'Oregon', capital: 'Salem' },
    { state: 'Texas', capital: 'Austin' },
    { state: 'Louisiana', capital: 'Baton Rouge' },
    { state: 'Kansas', capital: 'Topeka' },
    { state: 'Mississipi', capital: 'Jackson' }
  ];

  const getStates = () => {
    return states;
  };

  const addState = state => {
    if (state) {
      states.unshift(state);
    }
  };

  const deleteState = stateRow => {
    const index = states.indexOf(stateRow.entity);
    states.splice(index, 1);
  };

  return {
    states: getStates(),
    addState,
    deleteState,
    getStates
  };
};

export default statesService;
