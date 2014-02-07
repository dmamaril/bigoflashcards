define([
  'view',
  'hbs!templates/flashcards/index',
  'routers/flashcards'
], function (View, template, router) {
  return View.extend({
    initialize: function(){
      console.log(this.collection);
      this.model = this.collection.get(0);
      console.log(this.model);
    },
    name: 'flashcards/index',
    template: template,
    events: {
      "click a.previous": "previous",
      "click a.next": "next"
    },
    previous: function(e){
      e.preventDefault();
      // router.navigate('/previous');
      if (this.model.id === 0) {
        this.model = this.collection.get(this.collection.length - 1);
      } else this.model = this.collection.get(this.model.id - 1);
      this.render();
    },
    next: function(e){
      e.preventDefault();
      // router.navigate('/next');
      if (this.model.id === this.collection.length - 1) {
        this.model = this.collection.get(0);
      } else this.model = this.collection.get(this.model.id + 1);
      this.render();
    }
  });
});
