'use strict';

// DISPLAY FUNCTIONS FOR VERSION VIEWING

const app = require('../../app-data');

// Returns jQuery string for retreiving the document container based on docId.
const docContJq = function(docId) {
  return `.doc-master-container[data-doc-id="${docId}"]`;
};

// Go through all the section elements in this doc and remove '.exclude' class, and hide all add/remove tag buttons. Remove collapse class from all children.
const clearVersion = function(docId) {
  let doc = docContJq(docId);
  $(doc).find('span.doc-content-input').removeClass("tag-exclude");
  $(doc).find('button.add-tag-button').addClass("hide");
  $(doc).find('button.delete-tag-button').addClass("hide");
  $(doc).find('.doc-content-container').removeClass("collapse");

  // hide all new content fields below level 3
  $(doc).find('.new-content-container[data-level="4"]').addClass('hide');
};

// Renders the master version for a Document
const renderMaster = function(docId) {
  clearVersion(docId);
  $(docContJq(docId)).find('a.master-tab').tab('show'); // show master tab
};

// Adds and removes .include class from sections based on version tags
const renderVersion = function(docId, versId){
  console.log("Rendering Version");

  let vers = app.getVersion(docId, versId);
  let tags = vers.tags.map( (t) => t.section_id );
  console.log(tags);

  // Clear version formatting and show all add-tag buttons
  clearVersion(docId);
  let doc = docContJq(docId);
  $(doc).find('button.add-tag-button').removeClass("hide");

  // Then, for each tag in the set, add tag-include class and switch to a remove-tag button. Add collapse class to children.
  for (var i = 0; i < tags.length; i++) {
    $(doc).find(`span.doc-content-input[data-target="${tags[i]}"]`).addClass("tag-exclude");
    $(doc).find(`.doc-content-container[data-parent-id="${tags[i]}"][data-parent-type="Section"]`).addClass("collapse");
    $(doc).find(`button.delete-tag-button[data-target="${tags[i]}"]`).removeClass("hide");        $(doc).find(`button.add-tag-button[data-target="${tags[i]}"]`).addClass("hide");
  }

  // Finally, make sure the proper tab is showing
  $(`a.version-tab[data-version-id=${versId}]`).tab('show');
};

// Loops through all active versions and renders each one
const renderActiveVersions = function() {
  console.log("Rendering Active Versions");
  for (var docId in app.activeVersions) {
    if (app.activeVersions[docId]) {
      renderVersion(docId, app.activeVersions[docId]);
    } else {
      renderMaster(docId);
    }
  }
};

module.exports = {
  renderActiveVersions,
  renderVersion,
  renderMaster,
};
