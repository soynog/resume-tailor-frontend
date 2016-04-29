'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

let jsonExample = {
  "title": "Look at Me I'm a JSON",
  "style": "doc-title",
  "children": [  {"title": "I'm a node!",
                "children": [{"title": "content content content", "children": [{"title": "boop"},{"title": "sheboop"}]},
                          {"title": "woo content"},
                          {"title": "sooo much content"}]
              },
              {"title": "Me too!",
               "style": "highlight",
               "children": [{"title": "content content content"},
                         {"title": "woo content", "children": [{"title": "boop"},{"title": "sheboop"}]},
                         {"title": "sooo much content"}]
              },
              {"title": "Just another node...",
               "children": [ {"title": "content content content"},
                          {"title": "woo content"},
                          {"title": "sooo much content", "children": [{"title": "boop"},{"title": "sheboop"}]}]
              }
          ]
};


let renderJSON = function(){
  let titleTemplate = require('./templates/doc-template.handlebars');
  $('.content').append(titleTemplate({
    jsonExample
  }));
};

let renderNavBar = function(){
  let navBar = require('./templates/navbar.handlebars');
  $('.navbar-container').append(navBar());
};

$(document).ready(function(){
  renderNavBar();
  renderJSON();
});
