define([
  'collection-view',
  'hbs!templates/flashcards/-deck-view-item',
  'hbs!templates/flashcards/-deck-view-empty'
], function (CollectionView, itemTemplate, emptyTemplate) {
  return CollectionView.extend({
    name: 'flashcards/-deck-view',
    itemTemplate: itemTemplate,
    emptyTemplate: emptyTemplate
  });
});
