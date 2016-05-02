'use strict';

const app = require('../app-data');
const display = require('../display');
// const docsEvents = require('./events');

const createDocSuccess = function(data) {
  console.log("Document Created!");
  console.log(data);
  display.refreshContent();
};

const deleteDocSuccess = function() {
  console.log("Document Deleted!");
  display.refreshContent();
};

const updateDocTitleSuccess = function() {
  console.log("Document Title Updated");
  // let docIndex = app.documents.findIndex((doc) => doc.id === parseInt(docId));
  // app.documents[docIndex].title = newTitle;
  // console.log(app);

  display.refreshContent();
};

const getDocsSuccess = function(data) {
  console.log("Documents Loaded");
  app.documents = data.documents;
  console.log(app.documents);
  display.refreshContent();
  // docsEvents.addDocHandlers();
};

const success = function(data) {
  console.log(data);
};

const failure = function(error) {
  console.log(app);
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
