define([
  'backbone',
  'models/flashcards/flashcard',
  'collections/flashcards/deck',
  'views/root',
  'views/flashcards/index',
  'views/flashcards/add',
  'views/flashcards/review',
  'routers/mediator'
], function (Backbone, Flashcard, Deck, RootView, FlashcardIndexView, AddFlashcardView, ReviewFlashcardsView, mediator) {
  return Backbone.Router.extend({
    routes: {
      "": "index",
      "index": "index",
      "add": "add",
      ':id': "showCard"
    },

    initialize: function(){
      mediator.on('added', this.index.bind(this));
      mediator.on('add', this.add.bind(this));
      mediator.on('review', this.review.bind(this));
    },

    collection: new Deck([
      {
        id: 0,
        question: "What is the time complexity of Bubble Sort?",
        answer: "O(n^2)",
        correct: 0,
        attempts: 0
      }, {
        id: 1,
        question: "What is the space complexity of Merge Sort?",
        answer: "O(n^2)",
        correct: 0,
        attempts: 0
      }, {
        id: 2,
        question: "What is the complexity of Doug?",
        answer: "Too complex.",
        correct: 0,
        attempts: 0
      }
    ]),

    index: function(){
      var indexView = new FlashcardIndexView({
        model: new Flashcard(),   // TODO: Fix new Flashcard
        collection: this.collection
      });
      RootView.getInstance().setView(indexView);
      // var flashcardView = new AddFlashcardView({
      //   model: new Flashcard(),
      //   collection: this.collection
      // });
    },

    add: function(){
      var addFlashcardView = new AddFlashcardView({
        model: new Flashcard(),
        collection: this.collection
      });
      RootView.getInstance().setView(addFlashcardView);
    },

    review: function(){
      var reviewView = new ReviewFlashcardsView({
        model: new Flashcard(),
        collection: this.collection
      });
      RootView.getInstance().setView(reviewView);
    }

  });
});
