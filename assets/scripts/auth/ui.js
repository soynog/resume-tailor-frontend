'use strict';

const app = require('../app-data');
const display = require('../display');

const signInSuccess = function(data) {
  app.user = data.user;
  console.log(data.user.email + " signed in successfully.");
  console.log(app);

  // // Display user's documents
  display.homePage();
  // docsGetEvents.getUserDocs();
};

const signUpSuccess = function(data) {
  console.log("Successfully signed up " + data.user.email);
  signInSuccess(data);
};

const signOutSuccess = function() {
  app.user = null;
  console.log("User signed out successfully.");
  console.log(app);

  // Return to welcome Screen
  display.welcome();
};

const success = function(data) {
  console.log(data);
};

const failure = function(error) {
  console.log(app);
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
};
