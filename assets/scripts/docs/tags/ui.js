'use strict';

const createTagSuccess = function(data) {
  console.log("Tag Created!");
  console.log(data);
};

const deleteTagSuccess = function() {
  console.log("Tag Deleted!");
};

const failure = function(error) {
  console.error(error);
};


module.exports = {
  failure,
  createTagSuccess,
  deleteTagSuccess,
};
