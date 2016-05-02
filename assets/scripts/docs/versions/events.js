'use strict';

const versApi = require('./api');
const versUi = require('./ui');

const addNewVersHandler = function(callback) {
  $('.new-version-input').keydown(function (event) {
    if(event.keyCode === 13) {
      event.preventDefault();
      console.log("New Version Requested");
      let name = $(this).text().trim();
      let container = $(this).closest($('.doc-version-container'));
      let docId = container.attr('data-doc-id');
      versApi.createVersion([versUi.createVersSuccess, callback], versUi.failure, name, docId);
    }
  });
};

const addVersionModHandlers = function(callback) {
  $('.version-name-input').keydown(function (event) {
    if(event.keyCode === 13) {
      event.preventDefault();
      console.log("Version Modification Entered");
      let content = ($(this).text().trim());
      let versId = $(this).attr('data-version-id');
      console.log(content);
      console.log(versId);
      if(content) {
        console.log("Version Update Requested");
        versApi.updateVersion([versUi.updateVersSuccess, callback], versUi.failure, versId, content);
      } else {
        console.log("Version Delete Requested");
        versApi.deleteVersion([versUi.deleteVersSuccess, callback], versUi.failure, versId);
      }
    }
  });
};


const addVersHandlers = function(callback) {
  return function() {
    console.log("Adding version event handlers");
    addNewVersHandler(callback);
    addVersionModHandlers(callback);
  };
};

module.exports = {
  addVersHandlers,
};
