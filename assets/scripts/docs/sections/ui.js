'use strict';

const app = require('../../app-data');

const createSectSuccess = function(data) {
  console.log("Section Created!");
  console.log(data);
};

const deleteSectSuccess = function() {
  console.log("Section Deleted!");
};
//
// const updateDocTitleSuccess = function(docId, newTitle) {
//   console.log("Document Title Updated");
//   let docIndex = app.documents.findIndex((doc) => doc.id === parseInt(docId));
//   app.documents[docIndex].title = newTitle;
//   console.log(app);
//
//   display.refreshContent();
// };
//
// const getDocsSuccess = function(data) {
//   console.log("Documents Loaded");
//   app.documents = data.documents;
//   console.log(app.documents);
//   display.refreshContent();
//   // docsEvents.addDocHandlers();
// };


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
  createSectSuccess,
  deleteSectSuccess,
  // updateDocTitleSuccess,
};
