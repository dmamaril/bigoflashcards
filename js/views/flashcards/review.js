define([
  'underscore',
  'view',
  'hbs!templates/flashcards/review',
  'models/flashcards/flashcard',
  'views/root',
  'views/flashcards/-review-view',
  'routers/mediator'
], function (_, View, template, Flashcard, RootView, ReviewCollectionView, mediator) {
  return View.extend({
    name: 'flashcards/add',
    template: template,
    events: {
      'submit': 'addToCollection'
    },

    initialize: function(){
      View.prototype.initialize.apply(this, arguments); // call standard Thorax init code
      var reviewView = new ReviewCollectionView({
        model: new Flashcard(),
        collection: this.collection
      });
      // this.appendTo(this.parent);
      // console.log(this);
      RootView.getInstance().setView(reviewView);
    }

  });
});

  // <div class='question'>{{question}}</div>
  // <div class='hide toggle answer'>{{answer}}</div>
