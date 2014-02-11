define([
  'underscore',
  'view',
  'hbs!templates/flashcards/review',
  'models/flashcards/flashcard',
  'views/root',
  'routers/mediator'
], function (_, View, template, Flashcard, RootView, mediator) {
  return View.extend({
    name: 'flashcards/add',
    template: template,

    initialize: function(){
      View.prototype.initialize.apply(this, arguments); // call standard Thorax init code
      RootView.getInstance().setView(this);
    }
  });
});
