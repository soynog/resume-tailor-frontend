'use strict';

const appData = require('./app-data');

let jsonExample = appData.exampleData;

const renderJSON = function(json){
  let docTemplate = require('./templates/doc-template.handlebars');
  $('.content').append(docTemplate({
    json
  }));
};

const renderNavBar = function(){
  let navBar = require('./templates/navbar.handlebars');
  $('.navbar-container').append(navBar());
};

const renderModals = function(){
  let modals = require('./templates/modals.handlebars');
  $('.modal-container').append(modals());
};

const display = function(){
  renderNavBar();
  renderModals();
  renderJSON(jsonExample);
};



module.exports = display();
