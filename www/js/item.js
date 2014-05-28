define(function (require) {
  var ko = require('knockout');

  var Item = function (title, id) {
    this.title = ko.observable(title);
    this.id = ko.observable(id);
  };

  return Item;
});