'use strict';

const docsApi = require('./api');
const docsUi = require('./ui');
const sectEvents = require('./sections/events');

const addNewDocHandler = function(callback) {
  let createDocActions = function(event) {
    event.preventDefault();
    console.log("New Doc Handler Clicked");
    let title = $('#new-doc-title-input').text().trim();
    console.log(title);
    docsApi.createDocument([docsUi.createDocSuccess, callback], docsUi.failure, title);
  };

  $('.create-document-button').on('click', createDocActions);

  $('#new-doc-title-input').keydown(function (event){
    if(event.keyCode === 13) {
      createDocActions(event);
    }
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

const addEditTitleHandlers = function(callback) {
  let toggleEditable = function(docId) {
    let docTitleInput = $(`.doc-title-input[data-target=${docId}]`);
    if (docTitleInput.attr('contenteditable') === 'true') {
      docTitleInput.attr('contenteditable', 'false');
    } else {
      docTitleInput.attr('contenteditable', 'true');
    }
  };

  $('.edit-doc-title-button').on('click', function(event) {
    let docId = $(this).attr('data-target');
    console.log("Edit Button " + docId + " Clicked");
    event.preventDefault();
    toggleEditable(docId);
  });

  $('.doc-title-input').keydown(function (event){
    if(event.keyCode === 13) {
      event.preventDefault();
      let docId = $(this).attr('data-target');
      let newTitle = $(this).text().trim();
      console.log("New Title: " + newTitle + " submitted for " + docId);
      toggleEditable(docId);
      docsApi.updateDocTitle([docsUi.updateDocTitleSuccess(docId, newTitle), callback], docsUi.failure, docId, newTitle);
    }
  });
};

const addDocHandlers = function() {
  console.log("Adding document event handlers");
  addNewDocHandler(addDocHandlers);
  addDeleteHandlers(addDocHandlers);
  addEditTitleHandlers(addDocHandlers);
};

// Get user documents, display them on success
const getUserDocs = function() {
  docsApi.getDocuments([docsUi.getDocsSuccess, addDocHandlers, sectEvents.addSectHandlers], docsUi.failure);
};

module.exports = {
  addDocHandlers,
  getUserDocs,
};
