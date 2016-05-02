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

const updateSection = function(success, failure, sectId, newContent) {
  console.log("Updating Section Content");
  let url = app.api + '/sections/' + sectId;
  let data = {
    section: {
      content: newContent,
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
  createSection,
  deleteSection,
  updateSection,
};
