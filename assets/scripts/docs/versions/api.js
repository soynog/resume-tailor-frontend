'use strict';

const app = require('../../app-data');

const createVersion = function(success, failure, name, docId) {
  console.log("Creating Version");
  let url = app.api + '/versions';
  let data = {
    version: {
      name: name,
      document_id: docId
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

const deleteVersion = function(success, failure, verId) {
  console.log("Deleting Version");
  let url = app.api + '/versions/' + verId;
  $.ajax({
    method: 'DELETE',
    url,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  }).done(success)
  .fail(failure);
};

const updateVersion = function(success, failure, versId, newName) {
  console.log("Updating Version Name");
  let url = app.api + '/versions/' + versId;
  let data = {
    version: {
      name: newName,
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

module.exports = {
  createVersion,
  deleteVersion,
  updateVersion,
};
