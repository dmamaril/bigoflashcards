define(['model'], function (Model) {
  return Model.extend({
    name: 'flashcards/flashcard',

    defaults: {
      question: "What is Doug?",
      answer: "Nobody knows."
    }
  });
});
