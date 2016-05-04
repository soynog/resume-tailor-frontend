'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const authApi = require('./api');
const authUi = require('./ui');
const display = require('./display');

const addHandlers = function(signInCallback, signOutCallback) {
  console.log("Adding Auth Handlers");

  $('#sign-up-form').on('submit', function (event) {
    event.preventDefault();
    console.log("Sign Up Requested");
    let data = getFormFields(this);
    console.log(data);
    authApi.signIn([
      authApi.signUp(
        authUi.signUpSuccess,
        authUi.failure,
        data
      ),authUi.signInSuccess,signInCallback],
      authUi.failure,
      data
    );
  });

  $('#sign-in-form').on('submit', function (event) {
    event.preventDefault();
    console.log("Sign In Requested");
    let data = getFormFields(this);
    console.log(data);
    authApi.signIn([authUi.signInSuccess, signInCallback], authUi.failure, data);
  });

  $('#sign-out-button').on('click', function (event) {
    console.log("Sign Out Button Clicked");
    event.preventDefault();
    authApi.signOut([authUi.signOutSuccess, signOutCallback], authUi.failure);
  });

  $('#change-pw-form').on('submit', function (event) {
    console.log("Change Password Requested");
    event.preventDefault();
    let data = getFormFields(this);
    authApi.changePW([authUi.changePWSuccess], authUi.failure, data);
  });

  // Toggle Between Sign In and Sign Up forms
  $('#sign-up-form-request').on('click', function (event) {
    event.preventDefault();
    display.showSignUp();
  });
  $('#sign-up-cancel').on('click', function (event) {
    event.preventDefault();
    display.showSignIn();
  });

};

module.exports = {
  addHandlers,
};
