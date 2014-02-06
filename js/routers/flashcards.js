define([
  'backbone',
  'collection',
  'views/root',
  'views/flashcards/index'
], function (Backbone, Collection, RootView, FlashcardIndexView) {
  return Backbone.Router.extend({
    routes: {
      "": "index"
    },
    index: function(){
      var collection = new Collection([
      {
        question: "What is the complexity of Bubble Sort?",
        answer: "O(n^2)"
      }, {
        question: "What is the complexity of Doug?",
        answer: "O(?)"
      }
      ]);
      var view = new FlashcardIndexView({
        collection: collection
      });
      RootView.getInstance().setView(view);

    }
  });
});
