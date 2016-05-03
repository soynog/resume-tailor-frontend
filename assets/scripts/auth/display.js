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

module.exports = {
  renderAuthForms,
  showSignUp,
  showSignIn,
};
