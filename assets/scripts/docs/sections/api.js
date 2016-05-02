'use strict';

const app = require('../../app-data');

const createSection = function(success, failure, section) {
  console.log("Creating Section");
  let url = app.api + '/sections';
  let data = {
    section
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

const deleteSection = function(success, failure, sectId) {
  console.log("Deleting Section");
  let url = app.api + '/sections/' + sectId;
  $.ajax({
    method: 'DELETE',
    url,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  }).done(success)
  .fail(failure);
};

// const updateDocTitle = function(success, failure, docId, newTitle) {
//   console.log("Updating Document Title");
//   let url = app.api + '/documents/' + docId;
//   let data = {
//     document: {
//       title: newTitle,
//     }
//   };
//   $.ajax({
//     method: 'PATCH',
//     url,
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data
//   }).done(success)
//   .fail(failure);
// };

module.exports = {
  createSection,
  deleteSection,
  // updateDocTitle,
};
