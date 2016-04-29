'use strict';

const authEvents = require('./auth/events');
const display = require('./display');




$(document).ready(function(){
  display();
  authEvents.addHandlers();
});
