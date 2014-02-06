define([
  'backbone',
  'models/flashcards/flashcard',
  'collections/flashcards/deck',
  'views/root',
  'views/flashcards/index'
], function (Backbone, Flashcard, Deck, RootView, FlashcardIndexView) {
  return Backbone.Router.extend({
    routes: {
      "": "index",
      "index": "index",
      ':id': "showCard"
    },

    index: function(){
      var collection = new Deck([
      {
        id: 0,
        question: "What is the complexity of Bubble Sort?",
        answer: "O(n^2)"
      }, {
        id: 1,
        question: "What is the complexity of Doug?",
        answer: "Trick question."
      }
      ]);
      var view = new FlashcardIndexView({
        model: new Flashcard(),
        collection: collection
      });
      RootView.getInstance().setView(view);

    }



  });
});
