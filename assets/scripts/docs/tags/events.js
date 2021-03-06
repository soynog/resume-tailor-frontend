'use strict';

const tagsApi = require('./api');
const tagsUi = require('./ui');
const app = require('../../app-data');

const getTagId = function(docId, versId, sectId) {
  console.log("Getting Tag Id");
  let tags = app.getVersion(docId, versId).tags;
  let tagId = tags.find((t) => t.section_id === parseInt(sectId)).id;
  console.log(tagId);
  return tagId;
};

const addNewTagHandlers = function(callback) {
  $('.add-tag-button').on('click', function (event) {
    event.preventDefault();
    console.log("New Tag Requested");
    let docId = $(this).closest($('.doc-master-container')).attr('data-doc-id');
    let versId = app.activeVersions[docId];
    let sectId = parseInt($(this).closest($('.doc-content-group')).attr('data-sect-id'));
    console.log(versId);
    console.log(sectId);
    tagsApi.createTag([tagsUi.createTagSuccess, callback], tagsUi.failure, versId, sectId);
  });
};

const addDelTagHandlers = function(callback) {
  $('.delete-tag-button').on('click', function (event) {
    event.preventDefault();
    console.log("Tag Removal Requested");
    let docId = $(this).closest($('.doc-master-container')).attr('data-doc-id');
    let versId = app.activeVersions[docId];
    let sectId = parseInt($(this).closest($('.doc-content-group')).attr('data-sect-id'));
    let tagId = getTagId(docId, versId, sectId);
    tagsApi.deleteTag([tagsUi.deleteTagSuccess, callback], tagsUi.failure, tagId);
  });
};

const addTagHandlers = function(callback) {
  return function() {
    console.log("Adding Tag Event Handlers");
    addNewTagHandlers(callback);
    addDelTagHandlers(callback);
  };
};

module.exports = {
  addTagHandlers,
};
