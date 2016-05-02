'use strict';

const app = require('../app-data');
// const display = require('../display');

const createVerSuccess = function(data) {
  console.log("Version Created!");
  // app.documents.push(data.document);
  console.log(data);

  // display.refreshContent();
};

const deleteVerSuccess = function(verId) {
  console.log("Version Deleted!");

  // Delete element from app.documents were id = id
  console.log(verId);
  // app.documents.splice(app.documents.findIndex((doc) => doc.id === docId), 1);
  // console.log(app);

  // display.refreshContent();
};

const updateVerNameSuccess = function(verId, newName) {
  console.log("Version Name Updated");
  // let docIndex = app.documents.findIndex((doc) => doc.id === parseInt(docId));
  // app.documents[docIndex].title = newTitle;
  console.log(verId);
  console.log(newName);

  // display.refreshContent();
};

const getVersSuccess = function(data) {
  console.log("Versions Loaded");
  console.log(data);
  // app.documents = data.documents;
  // console.log(app.documents);
  // display.refreshContent();
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
  createVerSuccess,
  deleteVerSuccess,
  updateVerNameSuccess,
  getVersSuccess,
};
