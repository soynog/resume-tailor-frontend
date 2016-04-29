'use strict';

const app = require('../app-data');
const display = require('../display');

const getDocsSuccess = function(data) {
  console.log("Documents Loaded");
  console.log(data);
  let docs = data.documents;
  console.log(docs);
  display.renderDocuments(docs);
};

const createDocSuccess = function(data) {
  console.log("Document Created!");
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
  // getDocContentsSuccess,
};
