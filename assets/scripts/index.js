'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

let jsonExample = {
  "title": "Look at Me I'm a JSON",
  "nodes": [  {"title": "I'm a node!",
                "nodes": [{"title": "content content content"},
                          {"title": "woo content"},
                          {"title": "sooo much content"}]
              },
              {"title": "Me too!",
               "nodes": [{"title": "content content content"},
                         {"title": "woo content"},
                         {"title": "sooo much content"}]
              },
              {"title": "Just another node...",
               "nodes": [ {"title": "content content content"},
                          {"title": "woo content"},
                          {"title": "sooo much content"}]
              }
          ]
};


let renderJSON = function(){
  let titleTemplate = require('./templates/doc-title.handlebars');
  $('.content').append(titleTemplate({
    jsonExample
  }));
};

$(document).ready(function(){
  renderJSON();
});
