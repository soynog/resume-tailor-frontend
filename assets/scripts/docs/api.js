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
  // getDocContents,
};
