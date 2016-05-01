'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const authApi = require('./api');
const authUi = require('./ui');

const addHandlers = function(signInCallback) {
  $('#sign-up-form').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    authApi.signUp( authApi.signIn( authUi.signUpSuccess,
                                    authUi.failure, data),
                    authUi.failure, data);
  });
  $('#sign-in-form').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    authApi.signIn([authUi.signInSuccess, signInCallback], authUi.failure, data);
  });
  $('#sign-out-button').on('click', function (event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
};

module.exports = {
  addHandlers,
};
