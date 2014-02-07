define([
  'view',
  'hbs!templates/flashcards/index',
  'routers/flashcards'
], function (View, template, router) {
  return View.extend({
    initialize: function(){
      this.model = this.collection.get(0);
    },
    name: 'flashcards/index',
    template: template,
    events: {
      "click a.previous": "previous",
      "click a.next": "next",
      "click a.flip": "flip"
    },
    previous: function(e){
      e.preventDefault();
      if (this.model.id === 0) {
        this.model = this.collection.get(this.collection.length - 1);
      } else this.model = this.collection.get(this.model.id - 1);
      this.render();
    },

    next: function(e){
      e.preventDefault();
      if (this.model.id === this.collection.length - 1) {
        this.model = this.collection.get(0);
      } else this.model = this.collection.get(this.model.id + 1);
      this.render();
    },
    
    flip: function(e){
      e.preventDefault();
      $('.hide').toggleClass('hide');
    }

  });
});
