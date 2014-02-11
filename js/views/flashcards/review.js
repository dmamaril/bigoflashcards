define([
  'underscore',
  'view',
  'hbs!templates/flashcards/review',
  'views/root',
  'views/cardView',
  'routers/mediator'
], function (_, View, template, RootView, CardView, mediator) {
  return View.extend({
    name: 'flashcards/add',
    template: template,
    events: {
      'submit': 'addToCollection'
    },

    initialize: function(){
      View.prototype.initialize.apply(this, arguments); // call standard Thorax init code
      this.collection.each(function(card, index, collection){
        var cardView = new CardView({
          model: card,
          collection: collection
        });
        RootView.append(cardView);
      });
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

  // <div class='question'>{{question}}</div>
  // <div class='hide toggle answer'>{{answer}}</div>
