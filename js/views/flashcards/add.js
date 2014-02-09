define([
  'underscore',
  'view',
  'hbs!templates/flashcards/add',
  'views/root',
  'routers/mediator'
], function (_, View, template, RootView, mediator) {
  return View.extend({
    name: 'flashcards/add',
    template: template,
    // initialize: function(){
    //   View.prototype.initialize.apply(this, arguments);
    //   mediator.on('add', _.bind(function(){
    //     debugger;
    //     RootView.getInstance().setView(this);
    //     // $('body').append(this.render());
    //   }, this));
    // },
    events: {
      'submit': 'addToCollection'
    },
    addToCollection: function(e){
      e.preventDefault();
      var complexity = [];
      $('select.complexities').each(function(index, element){
        complexity.push(element.value);
      });

      this.collection.add(_.extend(this.serialize(), {
        id: this.collection.length,
        answer: complexity[0]
      }));
      
      mediator.trigger('added');
    }
  });
});
