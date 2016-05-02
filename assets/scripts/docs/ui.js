'use strict';

const app = require('../app-data');
const display = require('../display');
// const docsEvents = require('./events');

const createDocSuccess = function(data) {
  console.log("Document Created!");
  app.documents.push(data.document);
  console.log(app);

  display.refreshContent();
  // docsEvents.addDocHandlers();
};

const deleteDocSuccess = function(docId) {
  console.log("Document Deleted!");

  // Delete element from app.documents were id = id
  console.log(docId);
  app.documents.splice(app.documents.findIndex((doc) => doc.id === docId), 1);
  console.log(app);

  display.refreshContent();
  // docsEvents.addDocHandlers();
};

const updateDocTitleSuccess = function(docId, newTitle) {
  console.log("Document Title Updated");
  let docIndex = app.documents.findIndex((doc) => doc.id === parseInt(docId));
  app.documents[docIndex].title = newTitle;
  console.log(app);

  display.refreshContent();
};

const getDocsSuccess = function(data) {
  console.log("Documents Loaded");
  app.documents = data.documents;
  console.log(app.documents);
  display.refreshContent();
  // docsEvents.addDocHandlers();
};

const getDocContentsSuccess = function(data) {
  console.log("Document Loaded");
  console.log(data);
  // let doc = data.document;
  // console.log(doc);
  // display.renderDocuments(doc);
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
  getDocContentsSuccess,
};
