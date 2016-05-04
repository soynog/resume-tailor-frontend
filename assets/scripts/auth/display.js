'use strict';

// Renders the User Sign-in Forms
const renderAuthForms = function() {
  console.log("Rendering Auth Forms");
  let userAuthTemplate = require('../templates/user-auth.handlebars');
  $('.content-container').append(userAuthTemplate);
};

// Shows Sign Up Form, Hides Sign In
const showSignUp = function() {
  $('#sign-in-form-container').addClass('hide');
  $('#sign-up-form-container').removeClass('hide');
};

// Shows Sign In Form, Hides Sign Up
const showSignIn = function() {
  $('#sign-up-form-container').addClass('hide');
  $('#sign-in-form-container').removeClass('hide');
};


// Shows the user nav buttons
const showUserNavs = function() {
  $('#sign-out-button').removeClass('hide');
  $('#change-pw-request-button').removeClass('hide');
};

// Hides the user nav buttons
const hideUserNavs = function() {
  $('#sign-out-button').addClass('hide');
  $('#change-pw-request-button').addClass('hide');
};

module.exports = {
  renderAuthForms,
  showSignUp,
  showSignIn,
  showUserNavs,
  hideUserNavs,
};
