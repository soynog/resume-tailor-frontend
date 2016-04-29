'use strict';

const app = require('../app-data');
const display = require('../display');
const docsApi = require('../docs/api');
const docsUi = require('../docs/ui');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(data.user.email + " signed in successfully.");
  console.log(app);

  // Display user's documents
  display.homePage();
  docsApi.getDocuments(docsUi.getDocsSuccess, docsUi.failure);
};

const signUpSuccess = (data) => {
  console.log("Successfully signed up " + data.user.email);
  signInSuccess(data);
};

const signOutSuccess = () => {
  app.user = null;
  console.log("User signed out successfully.");
  console.log(app);

  // Return to welcome Screen
  display.welcome();
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
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
