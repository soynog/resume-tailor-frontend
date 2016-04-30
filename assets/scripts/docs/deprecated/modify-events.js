'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const docsApi = require('./api');
const docsModUi = require('./modify-ui');

const addNewDocHandler = function() {
  $('#new-doc-form').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log("New Doc Handler Clicked");
    docsApi.createDocument(docsModUi.createDocSuccess, docsModUi.failure, data);
  });
};

const addDeleteHandlers = function() {
  $('button.delete-document-button').on('click', function(event) {
    console.log("Delete Docs Button Clicked");
    event.preventDefault();
    let targetId = $(this).data("target");
    docsApi.deleteDocument(docsModUi.deleteDocSuccess(targetId), docsModUi.failure, targetId);
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
