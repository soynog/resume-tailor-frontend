'use strict';

const app = require('../../app-data');

const createSectSuccess = function(data) {
  console.log("Section Created!");
  console.log(data);
};

const deleteSectSuccess = function() {
  console.log("Section Deleted!");
};

const updateSectSuccess = function() {
  console.log("Section Updated!");
};

const failure = function(error) {
  console.error(error);
};


module.exports = {
  failure,
  createSectSuccess,
  deleteSectSuccess,
  updateSectSuccess,
};
