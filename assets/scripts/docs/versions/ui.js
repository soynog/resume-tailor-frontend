'use strict';

const app = require('../../app-data');

const createVersSuccess = function(data) {
  console.log("Version Created!");
  console.log(data);
};

const deleteVersSuccess = function() {
  console.log("Version Deleted!");
};

const updateVersSuccess = function() {
  console.log("Version Name Updated");
};

const failure = function(error) {
  console.error(error);
};


module.exports = {
  failure,
  createVersSuccess,
  deleteVersSuccess,
  updateVersSuccess,
};
