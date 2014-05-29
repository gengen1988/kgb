define(['knockout', './model'], function (ko, Model) {
  [1, 2, 3, 4].forEach(function (num) {
    console.log(num);
  });
  Model.check();
  ko.applyBindings(new Model());
});