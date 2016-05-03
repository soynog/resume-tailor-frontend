'use strict';

const app = require('../../app-data');

const createTag = function(success, failure, versId, sectId) {
  console.log("Creating Tag");
  let url = app.api + '/tags';
  let data = {
    tag: {
      version_id: versId,
      section_id: sectId
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

const deleteTag = function(success, failure, tagId) {
  console.log("Deleting Tag");
  let url = app.api + '/tags/' + tagId;
  $.ajax({
    method: 'DELETE',
    url,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  }).done(success)
  .fail(failure);
};

module.exports = {
  createTag,
  deleteTag,
};
