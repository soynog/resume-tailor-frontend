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

const renderNewDocForm = function() {
  // if(hide) {
  //   $('.new-document-form-container').empty();
  // } else {
  //   let newDocForm = require('./templates/new-doc-form.handlebars');
  //   $('.new-document-form-container').append(newDocForm);
  // }
  let newDocForm = require('./templates/new-doc-form.handlebars');
  $('.content-container').append(newDocForm);
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
};
