'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const docsApi = require('./api');
const docsUi = require('./ui');

const getUserDocs = function() {
  docsApi.getDocuments(docsUi.getDocsSuccess, docsUi.failure);
};

const addNewDocHandler = function() {
  $('#new-doc-form').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log("New Doc Handler Clicked");
    docsApi.createDocument(docsUi.createDocSuccess, docsUi.failure, data);
  });
};

module.exports = {
  getUserDocs,
  addNewDocHandler,
};
