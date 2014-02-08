define([
  'view',
  'hbs!templates/flashcards/add',
  'routers/mediator'
], function (View, template, mediator) {
  return View.extend({
    name: 'flashcards/add',
    template: template,
    initialize: function(){
      mediator.on('add', function(){
        $('body').append(this.render());
      }.bind(this));
    },
    events: {
      'click button.add': 'addToCollection'
    },
    addToCollection: function(e){
      e.preventDefault();
      this.remove();
      this.collection.add(this.serialize());
      mediator.trigger('added');
    }
  });
});
