'use strict';

const app = require('../app-data');
const display = require('../display');
const docsModifyEvents = require('./modify-events');

const createDocSuccess = function(data) {
  console.log("Document Created!");
  app.documents.push(data.document);
  console.log(app);

  display.refreshContent();
  docsModifyEvents.addDocHandlers();
};

const deleteDocSuccess = function(id) {
  console.log("Document Deleted!");

  // Delete element from app.documents were id = id
  app.documents.splice(app.documents.findIndex((doc) => doc.id === id), 1);
  console.log(app);

  display.refreshContent();
  docsModifyEvents.addDocHandlers();
};

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
  createDocSuccess,
  deleteDocSuccess,
};
