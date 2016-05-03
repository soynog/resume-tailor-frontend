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
  console.log("Rendering Documents");
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

// Renders the User Sign-in Forms
const renderAuthForms = function() {
  console.log("Rendering Auth Forms");
  let userAuthTemplate = require('./templates/user-auth.handlebars');
  $('.content-container').append(userAuthTemplate);
};

// Renders a New Document Form
const renderNewDocForm = function() {
  let newDocForm = require('./templates/new-doc-form.handlebars');
  $('.content-container').append(newDocForm);
};

// Renders the master version for a Document
const renderMaster = function(docId) {
  // Go through all the section elements in this doc and remove '.exclude' class, and hide all add/remove tag buttons
  let docContJq = `.doc-master-container[data-doc-id="${docId}"]`;

  $(docContJq).find('span.doc-content-input').removeClass("tag-exclude");
  $(docContJq).find('button.add-tag-button').addClass("hide");
  $(docContJq).find('button.delete-tag-button').addClass("hide");

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

  // First, remove all tag-include classes and hide all delete-tag buttons. Show all add-tag buttons.
  $(docContJq).find('span.doc-content-input').removeClass("tag-exclude");
  $(docContJq).find('button.delete-tag-button').addClass("hide");
  $(docContJq).find('button.add-tag-button').removeClass("hide");

  // Then, for each tag in the set, add tag-include class and switch to a remove-tag button
  for (var i = 0; i < tags.length; i++) {
    $(docContJq).find(`span.doc-content-input[data-target="${tags[i]}"]`).addClass("tag-exclude");
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
  renderAuthForms();
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

// Renders navbar and does any other startup actions necessary.
const startUp = function() {
  console.log("Starting App");
  console.log(app);
  renderNavBar();
};

// Shows Sign Up Form, Hides Sign In
const showSignUp = function() {
  $('#sign-in-form-container').addClass('hide');
  $('#sign-up-form-container').removeClass('hide');
};

// Shows Sign In Form, Hides Sign Up
const showSignIn = function() {
  $('#sign-up-form-container').addClass('hide');
  $('#sign-in-form-container').removeClass('hide');
};

module.exports = {
  startUp,
  welcome,
  homePage,
  renderText,
  refreshContent,
  renderVersion,
  renderMaster,
  showSignUp,
  showSignIn,
};
