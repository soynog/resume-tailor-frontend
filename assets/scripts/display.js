'use strict';

const app = require('./app-data');
const versionDisplay = require('./docs/versions/display');
const authDisplay = require('./auth/display');

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
const renderNavBar = function() {
  let navBar = require('./templates/navbar.handlebars');
  $('.navbar-container').append(navBar());
};

// Renders a New Document Form
const renderNewDocForm = function() {
  let newDocForm = require('./templates/new-doc-form.handlebars');
  $('.content-container').append(newDocForm);
};

// Clears the Site
const clearContent = function() {
  console.log("Clearing Screen");
  $('.content-container').empty();
};

// Displays the Welcome Page
const welcome = function() {
  clearContent();
  console.log("Displaying Welcome Screen");
  console.log(app);
  authDisplay.hideUserNavs();
  authDisplay.renderAuthForms();
};

// Refreshes the document list
const refreshContent = function() {
  clearContent();
  renderDocuments(app.documents);
  renderNewDocForm();
  versionDisplay.renderActiveVersions();
};

// Displays the User's Homepage
const homePage = function() {
  clearContent();
  console.log("Displaying Home Page");
  console.log(app);
  authDisplay.showUserNavs();
  refreshContent();
};

// Renders navbar and does any other startup actions necessary.
const startUp = function() {
  console.log("Starting App");
  console.log(app);
  renderNavBar();
};

module.exports = {
  startUp,
  welcome,
  homePage,
  renderText,
  refreshContent,
};
