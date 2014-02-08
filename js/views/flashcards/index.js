define([
  'view',
  'hbs!templates/flashcards/index',
  'routers/mediator',
  'routers/flashcards'
], function (View, template, mediator, router) {
  return View.extend({
    initialize: function(){
      this.model = this.collection.get(0);
      mediator.on('added', function(){
        $('body').append(this.render());
      }.bind(this));
    },
    name: 'flashcards/index',
    template: template,
    events: {
      "click button.previous": "previous",
      "click button.next": "next",
      "click button.toggle": "toggle",
      "click button.add": "add"
    },

    previous: function(e){
      e.preventDefault();
      if (this.model.id === 0) {
        this.model = this.collection.get(this.collection.length - 1);
      } else {
        this.model = this.collection.get(this.model.id - 1);
      }
      this.render();
    },

    next: function(e){
      e.preventDefault();
      if (this.model.id === this.collection.length - 1) {
        this.model = this.collection.get(0);
      } else {
        this.model = this.collection.get(this.model.id + 1);
      }
      this.render();
    },
    
    toggle: function(e){
      $('.toggle').toggleClass('hide');
    },

    add: function(e){
      e.preventDefault();
      // this.collection.add();
      this.remove();
      mediator.trigger('add');
    }
  });
});
