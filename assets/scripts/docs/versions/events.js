'use strict';

const versApi = require('./api');
const versUi = require('./ui');

const addNewVerHandler = function(callback) {
  let createDocActions = function(event) {
    event.preventDefault();
    console.log("New Version Handler Clicked");
    let name = $('#new-ver-name-input').text().trim();
    console.log(name);
    versApi.createVersion([versUi.createVerSuccess, callback], versUi.failure, name);
  };

  $('.create-version-button').on('click', createVerActions);

  $('#new-ver-name-input').keydown(function (event){
    if(event.keyCode === 13) {
      createVerActions(event);
    }
  });
};
//
// const addDeleteHandlers = function(callback) {
//   $('button.delete-document-button').on('click', function(event) {
//     console.log("Delete Docs Button Clicked");
//     event.preventDefault();
//     let targetId = $(this).data("target");
//     docsApi.deleteDocument([docsUi.deleteDocSuccess(targetId), callback], docsUi.failure, targetId);
//   });
// };

// const addEditNameHandlers = function(callback) {
//   let toggleEditable = function(docId) {
//     let docTitleInput = $(`.doc-title-input[data-target=${docId}]`);
//     if (docTitleInput.attr('contenteditable') === 'true') {
//       docTitleInput.attr('contenteditable', 'false');
//     } else {
//       docTitleInput.attr('contenteditable', 'true');
//     }
//   };
//
//   $('.edit-doc-title-button').on('click', function(event) {
//     let docId = $(this).attr('data-target');
//     console.log("Edit Button " + docId + " Clicked");
//     event.preventDefault();
//     toggleEditable(docId);
//   });
//
//   $('.doc-title-input').keydown(function (event){
//     if(event.keyCode === 13) {
//       event.preventDefault();
//       let docId = $(this).attr('data-target');
//       let newTitle = $(this).text().trim();
//       console.log("New Title: " + newTitle + " submitted for " + docId);
//       toggleEditable(docId);
//       docsApi.updateDocTitle([docsUi.updateDocTitleSuccess(docId, newTitle), callback], docsUi.failure, docId, newTitle);
//     }
//   });
// };

const addVerHandlers = function() {
  console.log("Adding version event handlers");
  addNewVerHandler(addVerHandlers);
  // addDeleteVerHandlers(addVerHandlers);
  // addEditNameHandlers(addVerHandlers);
};

// Get user documents, display them on success
const getDocVersions = function(docId) {
  versApi.getVersions([versUi.getVersSuccess, addVerHandlers], versUi.failure, docId);
};

module.exports = {
  addVerHandlers,
  getDocVersions,
};
