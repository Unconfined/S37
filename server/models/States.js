const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema({
  stateName: String,
  capital: String
});

StateSchema.methods.updateCapital = newName => {
  this.capital = newName;
};

const StateModel = mongoose.model('State', StateSchema);

module.exports = StateModel;
