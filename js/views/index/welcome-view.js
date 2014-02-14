define([
  'view',
  'hbs!templates/index/welcome-view'
], function (View, template) {
  return View.extend({
    name: 'index/welcome-view',
    template: template
  });
});
