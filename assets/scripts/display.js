'use strict';

const app = require('./app-data');

// let jsonExample = app.exampleData;

// Adds text to the content div.
const renderText = function(text){
  console.log("Rendering text...");
  console.log(text);
  $('.content').append(text);
};

// Renders a hierarchical document list to the content div.
const renderDocuments = function(documents){
  console.log("Rendering documents...");
  console.log(documents);
  let docListTemplate = require('./templates/doc-list.handlebars');
  $('.content').append(docListTemplate({documents}));
};

const renderNavBar = function(hide_navbar) {
  if(hide_navbar) {
    $('.navbar-container').empty();
  } else {
    let navBar = require('./templates/navbar.handlebars');
    $('.navbar-container').append(navBar());
  }
};

const renderModals = function(hide_modals) {
  if(hide_modals) {
    $('.modal-container').empty();
  } else {
    let modals = require('./templates/modals.handlebars');
    $('.modal-container').append(modals());
  }
};

const renderNewDocForm = function(hide) {
  if(hide) {
    $('.new-document-form-container').empty();
  } else {
    let newDocForm = require('./templates/new-doc-form.handlebars');
    $('.new-document-form-container').append(newDocForm);
  }
};

// Clears the Site
const clear = function() {
  console.log("Clearing Screen");
  $('.content').empty();
  $('.new-document-form-container').empty();
};

// Displays the Welcome Page
const welcome = function() {
  clear();
  console.log("Displaying Welcome Screen");
  console.log(app);
  renderText("Welcome");
};

// Displays the User's Homepage
const homePage = function() {
  clear();
  console.log("Displaying Home Page");
  console.log(app);
  renderText("Home Page of " + app.user.email);
  refreshContent();
};

// Refereshes the document list
const refreshContent = function() {
  clear();
  renderDocuments(app.documents);
  renderNewDocForm();
};

// Renders navbar, modals, and welcome screen or homepage.
const startUp = function() {
  clear();
  console.log("Starting App");
  console.log(app);
  renderNavBar();
  renderModals();
  if(app.user) {
    homePage();
  } else {
    welcome();
  }
};

module.exports = {
  startUp,
  welcome,
  homePage,
  renderText,
  refreshContent,
};
