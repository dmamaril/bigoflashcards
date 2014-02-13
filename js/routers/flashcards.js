define([
  'backbone',
  'models/flashcards/flashcard',
  'models/users/user',
  'collections/flashcards/deck',
  'views/root',
  'views/flashcards/index',
  'views/flashcards/add',
  'views/flashcards/review',
  'views/flashcards/-review-view',
  'routers/mediator'
], function  (Backbone,
              Flashcard,
              User,
              Deck,
              RootView,
              FlashcardIndexView,
              AddFlashcardView,
              ReviewFlashcardsView,
              ReviewCollectionView,
              mediator) {
  return Backbone.Router.extend({
    routes: {
      "": "home",
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

    login: function(){
      var loginView = new LoginView({
        model: new User()
      });
      RootView.getInstance().setView(loginView);
    },

    index: function(){
      var indexView = new FlashcardIndexView({
        model: this.collection.get(0),
        collection: this.collection
      });
      RootView.getInstance().setView(indexView);
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
        child: new ReviewCollectionView({
          collection: this.collection
        }),
        collection: this.collection
      });
      RootView.getInstance().setView(reviewView);
    }

  });
});
