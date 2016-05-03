'use strict';

const app = require('../app-data');
const display = require('../display');
// const docsEvents = require('./events');

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
  console.log(app);
  display.refreshContent();
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
