'use strict';

const app = require('./app-data');

// Adds text to the content div.
const renderText = function(text){
  console.log("Rendering text...");
  console.log(text);
  $('.content-container').append(text);
};

// Renders a hierarchical document list to the content div.
const renderDocuments = function(documents) {
  console.log("Rendering documents...");
  console.log(documents);
  let docListTemplate = require('./templates/doc-list.handlebars');
  $('.content-container').append(docListTemplate({documents}));
};

// Renders the Nav Bar
const renderNavBar = function(hide_navbar) {
  if(hide_navbar) {
    $('.navbar-container').empty();
  } else {
    let navBar = require('./templates/navbar.handlebars');
    $('.navbar-container').append(navBar());
  }
};

// Renders the (hidden) modals
const renderModals = function(hide_modals) {
  if(hide_modals) {
    $('.modal-container').empty();
  } else {
    let modals = require('./templates/modals.handlebars');
    $('.modal-container').append(modals());
  }
};

// Renders a New Document Form
const renderNewDocForm = function() {
  let newDocForm = require('./templates/new-doc-form.handlebars');
  $('.content-container').append(newDocForm);
};

// Adds and removes .include class from sections based on version tags
const renderVersion = function(docId, versId){
  console.log("Rendering Version");
  let doc = app.documents[(app.documents.findIndex((d) => d.id === parseInt(docId)))];
  let vers = doc.versions[(doc.versions.findIndex((v) => v.id === parseInt(versId)))];
  console.log(doc);
  console.log(vers);

  // Creates a Sorted List of all the included section tags for this version
  let tags = vers.tags.map( (t) => t.section_id ).sort();
  console.log(tags);

  // Go through all the section elements in this doc and append '.include' class if in the array; otherwise, remove it
  let docContJq = `.doc-master-container[data-doc-id="${docId}"]`;

  // First, remove all tag-include classes. Then for each tag in the set, add them back in. Also add all Tag-Add buttons, and remove them and add Tag-Delete buttons for each tag in the set
  $(docContJq).find('span.doc-content-input').removeClass("tag-include");
  $(docContJq).find('button.add-tag-button').removeClass("hide");

  for (var i = 0; i < tags.length; i++) {
    $(docContJq).find(`span.doc-content-input[data-target="${tags[i]}"]`).addClass("tag-include");
    $(docContJq).find(`button.add-tag-button[data-target="${tags[i]}"]`).addClass("hide");
    $(docContJq).find(`button.delete-tag-button[data-target="${tags[i]}"]`).removeClass("hide");
  }

  // Finally, make sure the proper tab is showing
  $(`a.version-tab[data-version-id=${versId}]`).tab('show');
};

// Loops through all active versions and renders each one
const renderActiveVersions = function() {
  console.log("Rendering Active Versions");
  for (var docId in app.activeVersion) {
    renderVersion(docId, app.activeVersion[docId]);
  }
};

// Clears the Site
const clearContent = function() {
  console.log("Clearing Screen");
  $('.content-container').empty();
  // $('.new-document-form-container').empty();
};

// Displays the Welcome Page
const welcome = function() {
  clearContent();
  console.log("Displaying Welcome Screen");
  console.log(app);
  renderText("Welcome");
};

// Refereshes the document list
const refreshContent = function() {
  clearContent();
  renderDocuments(app.documents);
  renderNewDocForm();
  renderActiveVersions();
};

// Displays the User's Homepage
const homePage = function() {
  clearContent();
  console.log("Displaying Home Page");
  console.log(app);
  refreshContent();
};

// Renders navbar, modals, and welcome screen or homepage.
const startUp = function() {
  console.log("Starting App");
  console.log(app);
  renderNavBar();
  renderModals();
};

module.exports = {
  startUp,
  welcome,
  homePage,
  renderText,
  refreshContent,
  renderVersion,
};
