define([
  'view',
  'hbs!templates/flashcards/add',
  'views/root',
  'routers/mediator'
], function (View, template, RootView, mediator) {
  return View.extend({
    name: 'flashcards/add',
    template: template,
    initialize: function(){
      mediator.on('add', function(){
        RootView.getInstance().setView(this);
        // $('body').append(this.render());
      }.bind(this));
    },
    events: {
      'submit': 'addToCollection'
    },
    addToCollection: function(e){
      e.preventDefault();
      debugger;
      alert("YEAH");
      this.collection.add(this.serialize());
      this.remove();
      mediator.trigger('added');
      console.log(this.serialize());
    }
  });
});
