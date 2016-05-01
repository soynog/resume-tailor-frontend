'use strict';

const app = require('../app-data');

const getDocuments = function(success, failure) {
  let url = app.api + '/documents';
  $.ajax({
    method: 'GET',
    url,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  }).done(success)
  .fail(failure);
};

const createDocument = function(success, failure, title) {
  console.log("Creating Document");
  let url = app.api + '/documents';
  let data = {
    document: {
      title: title,
      user_id: app.user.id
    }
  };
  console.log(data);
  $.ajax({
    method: 'POST',
    url,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data
  }).done(success)
  .fail(failure);
};

const deleteDocument = function(success, failure, docId) {
  console.log("Deleting Document");
  let url = app.api + '/documents/' + docId;
  $.ajax({
    method: 'DELETE',
    url,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  }).done(success)
  .fail(failure);
};

const updateDocTitle = function(success, failure, docId, newTitle) {
  console.log("Updating Document Title");
  let url = app.api + '/documents/' + docId;
  let data = {
    document: {
      title: newTitle,
    }
  };
  $.ajax({
    method: 'PATCH',
    url,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data
  }).done(success)
  .fail(failure);
};

// const getDocContents = function(docId, success, failure) {
//   let url = app.api + '/documents/' + docId;
//   $.ajax({
//     method: 'GET',
//     url,
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     }
//   }).done(success)
//   .fail(failure);
// };

module.exports = {
  getDocuments,
  createDocument,
  deleteDocument,
  updateDocTitle,
  // getDocContents,
};
