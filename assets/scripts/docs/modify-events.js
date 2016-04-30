'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const docsApi = require('./api');
const docsUi = require('./ui');

const addNewDocHandler = function() {
  $('#new-doc-form').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log("New Doc Handler Clicked");
    docsApi.createDocument(docsUi.createDocSuccess, docsUi.failure, data);
  });
};

const addDeleteHandlers = function() {
  $('button.delete-document-button').on('click', function(event) {
    console.log("Delete Docs Button Clicked");
    event.preventDefault();
    let targetId = $(this).data("target");
    docsApi.deleteDocument(docsUi.deleteDocSuccess, docsUi.failure, targetId);
  });
};


const addDocHandlers = function() {
  console.log("Adding document event handlers");
  addNewDocHandler();
  addDeleteHandlers();
};

module.exports = {
  addDocHandlers,
};
