define([
  'view',
  'hbs!templates/flashcards/add'
], function (View, template) {
  return View.extend({
    name: 'flashcards/add',
    template: template
  });
});
