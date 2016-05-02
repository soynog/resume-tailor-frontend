'use strict';

const sectsApi = require('./api');
const sectsUi = require('./ui');

const addNewSectHandler = function(callback) {
  $('.new-content-input').keydown(function (event) {
    if(event.keyCode === 13) {
      event.preventDefault();
      console.log("New Section Requested");
      let content = $(this).text().trim();
      let container = $(this).closest($('.doc-content-container'));
      let parentId = container.attr('data-parent-id');
      let parentType = container.attr('data-parent-type');
      let section = { content,
                      style: null,
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

// const addDeleteHandlers = function(callback) {
//   $('button.delete-document-button').on('click', function(event) {
//     console.log("Delete Docs Button Clicked");
//     event.preventDefault();
//     let targetId = $(this).data("target");
//     docsApi.deleteDocument([docsUi.deleteDocSuccess(targetId), callback], docsUi.failure, targetId);
//   });
// };
//
// const addEditTitleHandlers = function(callback) {
//   let toggleEditable = function(docId) {
//     let docTitleInput = $(`.doc-title-input[data-target=${docId}]`);
//     if (docTitleInput.attr('contenteditable') === 'true') {
//       docTitleInput.attr('contenteditable', 'false');
//     } else {
//       docTitleInput.attr('contenteditable', 'true');
//     }
//   };
//
//   $('.edit-doc-title-button').on('click', function(event) {
//     let docId = $(this).attr('data-target');
//     console.log("Edit Button " + docId + " Clicked");
//     event.preventDefault();
//     toggleEditable(docId);
//   });
//
//   $('.doc-title-input').keydown(function (event){
//     if(event.keyCode === 13) {
//       event.preventDefault();
//       let docId = $(this).attr('data-target');
//       let newTitle = $(this).text().trim();
//       console.log("New Title: " + newTitle + " submitted for " + docId);
//       toggleEditable(docId);
//       docsApi.updateDocTitle([docsUi.updateDocTitleSuccess(docId, newTitle), callback], docsUi.failure, docId, newTitle);
//     }
//   });
// };

const addSectHandlers = function(callback) {
  return function() {
    console.log("Adding section event handlers");
    addNewSectHandler(callback);
    addSectionModHandlers(callback);
    // addDeleteHandlers(addDocHandlers);
    // addEditTitleHandlers(addDocHandlers);
  };
};

module.exports = {
  addSectHandlers,
};
