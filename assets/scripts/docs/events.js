'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const docsApi = require('./api');
const docsUi = require('./ui');

const addNewDocHandler = function(callback) {
  $('#new-doc-form').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log("New Doc Handler Clicked");
    docsApi.createDocument([docsUi.createDocSuccess, callback], docsUi.failure, data);
  });
};

const addDeleteHandlers = function(callback) {
  $('button.delete-document-button').on('click', function(event) {
    console.log("Delete Docs Button Clicked");
    event.preventDefault();
    let targetId = $(this).data("target");
    docsApi.deleteDocument([docsUi.deleteDocSuccess(targetId), callback], docsUi.failure, targetId);
  });
};

const addDocHandlers = function() {
  console.log("Adding document event handlers");
  addNewDocHandler(addDocHandlers);
  addDeleteHandlers(addDocHandlers);
};

// Get user documents, display them on success
const getUserDocs = function() {
  docsApi.getDocuments([docsUi.getDocsSuccess, addDocHandlers], docsUi.failure);
};

module.exports = {
  addDocHandlers,
  getUserDocs,
};
