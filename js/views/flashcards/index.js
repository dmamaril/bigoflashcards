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
      this.model = this.collection.get(this.model.id - 1);
    },
    next: function(e){
      e.preventDefault();
      // router.navigate('/next');
      this.model = this.collection.get(this.model.id + 1);
    }
  });
});
