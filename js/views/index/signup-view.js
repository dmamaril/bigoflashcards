define([
  'view',
  'hbs!templates/index/signup-view'
], function (View, template) {
  return View.extend({
    name: 'index/signup-view',
    template: template,

    events: {
      'submit form.signup': 'alertSignup'
    },

    alertSignup: function(e){
      e.preventDefault();
      var userData = this.serialize();
      console.log(userData);
    }
  });
});
