'use strict';

const app = require('./app-data');
const display = require('./display');
const authEvents = require('./auth/events');
const docsEvents = require('./docs/events');


// Display this if a user is logged in.
const userHomePage = function() {
  display.homePage();
  docsEvents.getUserDocs();
};

// Display this if no user logged in.
const welcomePage = function() {
  display.welcome();

  // Create the User Auth event handlers, passing in userHomePage as a callback for when user successfully signs in, and welcomePage as a callback for signout.
  authEvents.addHandlers(userHomePage, welcomePage);
};

const loadView = function() {
  display.startUp();

  if(app.user) {
    userHomePage();
  } else {
    welcomePage();
  }
};

module.exports = {
  loadView,
};
