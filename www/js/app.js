define(function (require) {
  var Model = require('./model');
  var ko = require('knockout');
  Model.check();
  
  ko.applyBindings(new Model());
});