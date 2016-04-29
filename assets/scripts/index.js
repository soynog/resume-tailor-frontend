'use strict';

const appData = require('./app-data');
const authEvents = require('./auth/events');


let jsonExample = appData.exampleData;


let renderJSON = function(json){
  let docTemplate = require('./templates/doc-template.handlebars');
  $('.content').append(docTemplate({
    json
  }));
};

let renderNavBar = function(){
  let navBar = require('./templates/navbar.handlebars');
  $('.navbar-container').append(navBar());
};

let renderModal = function(){
  let modal = require('./templates/login-modal.handlebars');
  $('.modal-container').append(modal());
};

$(document).ready(function(){
  renderNavBar();
  renderJSON(jsonExample);
  renderModal();
  authEvents.addHandlers();
});
