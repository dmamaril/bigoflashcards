define([
  'view',
  'hbs!templates/flashcards/index'
], function (View, template) {
  return View.extend({
    name: 'flashcards/index',
    template: template
  });
});
