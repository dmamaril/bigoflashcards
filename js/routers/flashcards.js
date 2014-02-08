define([
  'backbone',
  'models/flashcards/flashcard',
  'collections/flashcards/deck',
  'views/root',
  'views/flashcards/index',
  'views/flashcards/add'
], function (Backbone, Flashcard, Deck, RootView, FlashcardIndexView, AddFlashcardView) {
  // TODO: Fix this fucking circular reference
  // http://lostechies.com/derickbailey/2011/08/28/dont-execute-a-backbone-js-route-handler-from-your-code/
  return Backbone.Router.extend({
    routes: {
      "": "index",
      "index": "index",
      "add": "add",
      ':id': "showCard"
    },

    collection: new Deck([
      {
        id: 0,
        question: "What is the time complexity of Bubble Sort?",
        answer: "O(n^2)"
      }, {
        id: 1,
        question: "What is the space complexity of Merge Sort?",
        answer: "O(n^2)"
      }, {
        id: 2,
        question: "What is the complexity of Doug?",
        answer: "Too complex."
      }
    ]),

    index: function(){
      var indexView = new FlashcardIndexView({
        model: new Flashcard(),
        collection: this.collection
      });
      RootView.getInstance().setView(indexView);
      var flashcardView = new AddFlashcardView({
        model: new Flashcard(),
        collection: this.collection
      });
    },

    add: function(){
      var flashcardView = new AddFlashcardView({
        model: new Flashcard(),
        collection: this.collection
      });
      RootView.getInstance().setView(flashcardView);
    }

  });
});
