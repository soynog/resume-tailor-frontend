'use strict';

const app = require('../app-data');

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-up',
    data,
  }).done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-in',
    data,
  }).done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  console.log(app);
  if(app.user) {
    $.ajax({
      method: 'DELETE',
      url: app.api + '/sign-out/' + app.user.id,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      }
    }).done(success)
    .fail(failure);
  }
};

module.exports = {
  signUp,
  signIn,
  signOut,
};
