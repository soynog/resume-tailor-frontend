'use strict';

const docsApi = require('./api');
const docsGetUi = require('./get-ui');

// Get user documents, display them on success
const getUserDocs = function() {
  docsApi.getDocuments(docsGetUi.getDocsSuccess, docsGetUi.failure);
};

module.exports = {
  getUserDocs,
};
