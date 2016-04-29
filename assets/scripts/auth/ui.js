'use strict';

const app = require('../app-data');
const authApi = require('./api');

const signUpSuccess = (data) => {
  app.user = data.user;
  console.log(data);
  console.log("Successfully signed up " + data.user.email);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(data.user.email + " signed in successfully.");
  console.log(app);
  // Display user's documents
};

const signOutSuccess = () => {
  app.user = null;
  console.log("User signed out successfully.");
  console.log(app);
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
