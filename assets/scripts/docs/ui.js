'use strict';

const app = require('../app-data');
const display = require('../display');
const docsModifyEvents = require('./modify-events');

const getDocsSuccess = function(data) {
  console.log("Documents Loaded");
  console.log(data);
  let docs = data.documents;
  console.log(docs);
  display.renderDocuments(docs);
  docsModifyEvents.addDocHandlers();
};

const createDocSuccess = function(data) {
  console.log("Document Created!");
  console.log(data);
};

const deleteDocSuccess = function(data) {
  console.log("Document Deleted!");
  console.log(data);
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
  createDocSuccess,
  deleteDocSuccess,
  // getDocContentsSuccess,
};
