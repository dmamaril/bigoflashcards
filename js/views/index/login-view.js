define([
  'view',
  'hbs!templates/index/login-view'
], function (View, template) {
  return View.extend({
    name: 'index/login-view',
    template: template
  });
});
