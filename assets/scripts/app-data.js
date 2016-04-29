'use strict';

const app = {
  api: 'http://localhost:3000',
  exampleData: {
    "content": "Look at Me I'm a JSON example",
    "style": "doc-title",
    "children": [  {"content": "I'm a node!",
                  "children": [{"content": "content content content", "children": [{"content": "boop"},{"content": "sheboop"}]},
                            {"content": "woo content"},
                            {"content": "sooo much content"}]
                },
                {"content": "Me too!",
                 "style": "highlight",
                 "children": [{"content": "content content content"},
                           {"content": "woo content", "children": [{"content": "boop"},{"content": "sheboop"}]},
                           {"content": "sooo much content"}]
                },
                {"content": "Just another node...",
                 "children": [ {"content": "content content content"},
                            {"content": "woo content"},
                            {"content": "sooo much content", "children": [{"content": "boop"},{"content": "sheboop"}]}]
                }
            ]
  }
};

module.exports = app;
