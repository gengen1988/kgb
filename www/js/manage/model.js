define(function (require) {
  var ko = require('knockout');

  var Model = function (id) {
    this.id = ko.observable(id);
  };

  return Model;
});