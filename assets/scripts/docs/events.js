'use strict';

// const getFormFields = require('../../../lib/get-form-fields');
const docsApi = require('./api');
const docsUi = require('./ui');

const getUserDocs = function() {
  docsApi.getDocuments(docsUi.getDocsSuccess, docsUi.failure);
};

module.exports = {
  getUserDocs,
};
