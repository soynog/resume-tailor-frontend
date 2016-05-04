'use strict';

const app = require('../app-data');

const signInSuccess = function(data) {
  app.user = data.user;
  console.log(data.user.email + " signed in successfully.");
  console.log(app);
};

const signUpSuccess = function(data) {
  console.log("Successfully signed up " + data.user.email);
};

const signOutSuccess = function() {
  app.user = null;
  console.log("User signed out successfully.");
  console.log(app);
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
