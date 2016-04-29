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

const createDocument = function(title, success, failure) {
  let url = app.api + '/documents';
  let data = {
    document: {
      title: title,
      user_id: app.user.id
    }
  };
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
  // getDocContents,
};
