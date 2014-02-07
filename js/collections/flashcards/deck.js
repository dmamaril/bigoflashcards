define([
  'collection',
  'models/flashcards/flashcard'
], function (Collection, Flashcard) {
  return Collection.extend({
    name: 'flashcards/deck',
    model: Flashcard
    // TODO: add controller to manage views
  });
});
