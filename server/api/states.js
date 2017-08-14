const mongoose = require('mongoose');
const router = require('express').Router();

const StateModel = require('../models/States');

router.get('/', (req, res) => {
  const states = StateModel.find()
    .then(states => {
      res.json(states);
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;
