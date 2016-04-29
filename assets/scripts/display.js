'use strict';

const app = require('./app-data');

// let jsonExample = app.exampleData;

const renderContent = function(json){
  if(!json) {
    $('.content').empty();
  } else {
    let docTemplate = require('./templates/doc-template.handlebars');
    $('.content').append(docTemplate({
      json
    }));
  }
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

// Clears the Site
const clear = function() {
  console.log("Clearing Screen");
  renderContent("");
};

// Displays the Welcome Page
const welcome = function() {
  clear();
  console.log("Displaying Welcome Screen");
  console.log(app);
  renderContent({content: "Welcome"});
};

// Displays the User's Homepage
const homePage = function() {
  clear();
  console.log("Displaying Home Page");
  console.log(app);
  renderContent({content: "Home Page of " + app.user.email});
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
};
