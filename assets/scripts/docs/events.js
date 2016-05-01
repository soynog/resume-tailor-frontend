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

const addEditTitleHandlers = function() {
  $('.edit-doc-title-button').on('click', function(event) {
    let docId = $(this).attr('data-target');
    console.log("Edit Button " + docId + " Clicked");
    event.preventDefault();
    let docTitleInput = $(`.doc-title-input[data-target=${docId}]`);
    if (docTitleInput.attr('contenteditable') === 'true') {
      docTitleInput.attr('contenteditable', 'false');
    } else {
      docTitleInput.attr('contenteditable', 'true');
    }
  });

  $('.doc-title-input').keydown(function (event){
    if(event.keyCode === 13) {
      event.preventDefault();
      let docId = $(this).attr('data-target');
      let newTitle = $(this).text();
      console.log("New Title: " + newTitle + " submitted for " + docId);
      // Make POST request
    }
  });
};

const addDocHandlers = function() {
  console.log("Adding document event handlers");
  addNewDocHandler(addDocHandlers);
  addDeleteHandlers(addDocHandlers);
  addEditTitleHandlers();
};

// Get user documents, display them on success
const getUserDocs = function() {
  docsApi.getDocuments([docsUi.getDocsSuccess, addDocHandlers], docsUi.failure);
};

module.exports = {
  addDocHandlers,
  getUserDocs,
};
