define([
  'underscore',
  'view',
  'hbs!templates/flashcards/index',
  'routers/mediator',
  'views/root',
  'routers/flashcards'
], function (_, View, template, mediator, RootView, router) {
  return View.extend({
    initialize: function(){
      View.prototype.initialize.apply(this, arguments); // call standard Thorax init code
      this.model = this.collection.get(0);
      // debugger;
      // var that = this;
      // mediator.on('added', function(){
      //   debugger;
      //   RootView.getInstance().setView();
      // });
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
      mediator.trigger('add');
    }
  });
});
