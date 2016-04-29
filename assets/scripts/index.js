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

let renderModals = function(){
  let modals = require('./templates/modals.handlebars');
  $('.modal-container').append(modals());
};

$(document).ready(function(){
  renderNavBar();
  renderJSON(jsonExample);
  renderModals();
  authEvents.addHandlers();
});
