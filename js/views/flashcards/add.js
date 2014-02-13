define([
  'underscore',
  'view',
  'hbs!templates/flashcards/add',
  'views/root',
  'routers/mediator'
], function (_, View, template, RootView, mediator) {
  return View.extend({
    name: 'flashcards/add',
    template: template,
    events: {
      'submit': 'addToCollection'
    },
    addToCollection: function(e){
      e.preventDefault();

      this.collection.add(_.extend(this.serialize(), {
        id: this.collection.length,
        answer: $('select.complexities')[0].value,
        correct: 0,
        attempts: 0
      }));

      mediator.trigger('added');
    }
  });
});
