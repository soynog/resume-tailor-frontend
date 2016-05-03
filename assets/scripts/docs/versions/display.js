'use strict';

// DISPLAY FUNCTIONS FOR VERSION VIEWING

const app = require('../../app-data');

// Renders the master version for a Document
const renderMaster = function(docId) {
  // Go through all the section elements in this doc and remove '.exclude' class, and hide all add/remove tag buttons. Remove collapse class from all children.
  let docContJq = `.doc-master-container[data-doc-id="${docId}"]`;

  $(docContJq).find('span.doc-content-input').removeClass("tag-exclude");
  $(docContJq).find('button.add-tag-button').addClass("hide");
  $(docContJq).find('button.delete-tag-button').addClass("hide");
  $(docContJq).find('.doc-content-container').removeClass("collapse");

  // Finally, make sure the proper tab is showing
  $(docContJq).find('a.master-tab').tab('show');
};

// Adds and removes .include class from sections based on version tags
const renderVersion = function(docId, versId){
  console.log("Rendering Version");
  let doc = app.documents.find((d) => d.id === parseInt(docId));
  console.log(doc);
  let vers = doc.versions.find((v) => v.id === parseInt(versId));
  console.log(vers);

  // Creates a Sorted List of all the included section tags for this version
  let tags = vers.tags.map( (t) => t.section_id ).sort();
  console.log(tags);

  // Go through all the section elements in this doc and append '.exclude' class if in the array; otherwise, remove it
  let docContJq = `.doc-master-container[data-doc-id="${docId}"]`;

  // First, remove all tag-include classes and hide all delete-tag buttons. Show all add-tag buttons. Remove collapse class from all children.
  $(docContJq).find('span.doc-content-input').removeClass("tag-exclude");
  $(docContJq).find('button.delete-tag-button').addClass("hide");
  $(docContJq).find('button.add-tag-button').removeClass("hide");
  $(docContJq).find('.doc-content-container').removeClass("collapse");

  // Then, for each tag in the set, add tag-include class and switch to a remove-tag button. Add collapse class to children.
  for (var i = 0; i < tags.length; i++) {
    $(docContJq).find(`span.doc-content-input[data-target="${tags[i]}"]`).addClass("tag-exclude");
    $(docContJq).find(`.doc-content-container[data-parent-id="${tags[i]}"][data-parent-type="Section"]`).addClass("collapse");
    $(docContJq).find(`button.delete-tag-button[data-target="${tags[i]}"]`).removeClass("hide");        $(docContJq).find(`button.add-tag-button[data-target="${tags[i]}"]`).addClass("hide");
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
