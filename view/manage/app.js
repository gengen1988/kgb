define(function (require) {
  var Model = require('./model');
  var ko = require('knockout');
  var $ = require('jquery');

  var hash = window.location.hash.substring(1);

  ko.applyBindings(new Model(hash));

  $('#submit-link').click(function () {
    history.back();
  });

});