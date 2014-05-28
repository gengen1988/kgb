define(function (require) {
  var Item = require('./item');
  var ko = require('knockout');

  var Model = function () {
    this.items = ko.observableArray();
    this.items.push(new Item('ETFrameworkMobile', '0001'));
    this.items.push(new Item('Bootplate', '0002'));
    this.items.push(new Item('CuttingEdge', '0003'));
  };
  
  function check() {
    console.log('check');
  }
  
  Model.check = check;
  
  return Model;
});