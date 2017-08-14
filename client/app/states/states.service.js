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

  return {
    states: getStates(),
    getStates
  };
};

export default statesService;
