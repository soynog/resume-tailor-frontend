'use strict';

const app = require('../app-data');

const getVersions = function(success, failure) {
  let url = app.api + '/versions';
  $.ajax({
    method: 'GET',
    url,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  }).done(success)
  .fail(failure);
};

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

const updateVerName = function(success, failure, verId, newName) {
  console.log("Updating Version Name");
  let url = app.api + '/versions/' + verId;
  let data = {
    document: {
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
  getVersions,
  createVersion,
  deleteVersion,
  updateVerName,
};
