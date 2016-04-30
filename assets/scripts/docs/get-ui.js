'use strict';

const app = require('../app-data');
const display = require('../display');
const docsModifyEvents = require('./modify-events');

const getDocsSuccess = function(data) {
  console.log("Documents Loaded");
  app.documents = data.documents;
  console.log(app.documents);
  display.refreshContent();
  docsModifyEvents.addDocHandlers();
};

// const getDocContentsSuccess = function(data) {
//   console.log("Document Loaded");
//   console.log(data);
//   let doc = data.document;
//   console.log(doc);
//   display.renderDocuments(doc);
// };

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.log(app);
  console.error(error);
};


module.exports = {
  failure,
  success,
  getDocsSuccess,
  // getDocContentsSuccess,
};
