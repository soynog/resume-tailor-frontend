'use strict';

const app = require('../app-data');

const createDocSuccess = function(data) {
  console.log("Document Created!");
  console.log(data);
};

const deleteDocSuccess = function() {
  console.log("Document Deleted!");
};

const updateDocTitleSuccess = function() {
  console.log("Document Title Updated!");
};

const getDocsSuccess = function(data) {
  console.log("Documents Loaded!");
  app.documents = data.documents;
  app.addVersions();
  console.log(app);
};

const success = function(data) {
  console.log(data);
};

const failure = function(error) {
  console.error(error);
};


module.exports = {
  failure,
  success,
  createDocSuccess,
  deleteDocSuccess,
  updateDocTitleSuccess,
  getDocsSuccess,
};
