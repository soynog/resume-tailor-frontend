'use strict';

const sectsApi = require('./api');
const sectsUi = require('./ui');

// Returns the section level in the document tree
const getLevel = function(element) {
  return $(element).parentsUntil('.doc-master-container').length - 2;
};

const addNewSectHandler = function(callback) {
  $('.new-content-input').keydown(function (event) {
    if(event.keyCode === 13) {
      event.preventDefault();
      console.log("New Section Requested");
      let content = $(this).val().trim();
      console.log(content);
      let level = getLevel(this);
      console.log(level);
      let container = $(this).closest($('.doc-content-container'));
      let parentId = container.attr('data-parent-id');
      let parentType = container.attr('data-parent-type');
      let section = { content,
                      style: level,
                      parent_id: parentId,
                      parent_type: parentType };
      sectsApi.createSection([sectsUi.createSectSuccess, callback], sectsUi.failure, section);
    }
  });
};

const addSectionModHandlers = function(callback) {
  $('.doc-content-input').keydown(function (event) {
    if(event.keyCode === 13) {
      event.preventDefault();
      console.log("Section Content Modification Entered");
      let content = ($(this).text().trim());
      let container = $(this).closest($('.doc-content-input'));
      let sectId = container.attr('data-target');
      if(content) {
        console.log("Section Update Requested");
        sectsApi.updateSection([sectsUi.updateSectSuccess, callback], sectsUi.failure, sectId, content);
      } else {
        console.log("Section Delete Requested");
        sectsApi.deleteSection([sectsUi.deleteSectSuccess, callback], sectsUi.failure, sectId);
      }
    }
  });
};

const addSectHandlers = function(callback) {
  return function() {
    console.log("Adding section event handlers");
    addNewSectHandler(callback);
    addSectionModHandlers(callback);
  };
};

module.exports = {
  addSectHandlers,
};
