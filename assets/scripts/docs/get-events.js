'use strict';

const docsApi = require('./api');
const docsUi = require('./ui');

// Get user documents, display them on success
const getUserDocs = function() {
  docsApi.getDocuments(docsUi.getDocsSuccess, docsUi.failure);
};

module.exports = {
  getUserDocs,
};
