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
  'views/index/login-view',
  'views/index/signup-view',
  'views/index/welcome-view',
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
              LoginView,
              SignupView,
              WelcomeView,
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

    home: function(){
      var welcomeView = new WelcomeView({
        model: new User(),
        loginChild: new LoginView({
          model: this.model
        }),
        signupChild: new SignupView({
          model: this.model
        })
      });
      RootView.getInstance().setView(welcomeView);
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
