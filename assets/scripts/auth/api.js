'use strict';

const app = require('../app-data');

const signUp = (success, failure, data) => {
  console.log("Requesting Sign-up");
  console.log(data);
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-up',
    data,
  }).done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  console.log("Requesting Sign-in");
  console.log(data);
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-in',
    data,
  }).done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  console.log("Requesting Sign-out");
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

const changePW = (success, failure, data) => {
  console.log("Requesting Password Change");
  console.log(data);
  if(app.user) {
    $.ajax({
      method: 'PATCH',
      url: app.api + '/change-password/' + app.user.id,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data,
    }).done(success)
    .fail(failure);
  }
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePW,
};
