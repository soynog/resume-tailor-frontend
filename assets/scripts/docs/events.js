'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const docsApi = require('./api');
const docsUi = require('./ui');

const addNewDocHandler = function(callback) {
  let createDocActions = function(event) {
    event.preventDefault();
    // let data = getFormFields($('#new-doc-form'));
    let data = getFormFields($('#new-doc-form')[0]);
    console.log("New Doc Handler Clicked");
    console.log(data);
    docsApi.createDocument([docsUi.createDocSuccess, callback], docsUi.failure, data);
  };

  $('.create-document-button').on('click', createDocActions);
  $('#new-doc-form').on('submit', createDocActions);
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
