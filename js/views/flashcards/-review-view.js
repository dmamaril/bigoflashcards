define([
  'collection-view',
  'hbs!templates/flashcards/-review-view-item',
  'hbs!templates/flashcards/-review-view-empty'
], function (CollectionView, itemTemplate, emptyTemplate) {
  return CollectionView.extend({
    name: 'flashcards/-review-view',
    itemTemplate: itemTemplate,
    emptyTemplate: emptyTemplate
  });
});
