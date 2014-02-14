define([
  'view',
  'hbs!templates/index/login-view'
], function (View, template) {
  return View.extend({
    name: 'index/login-view',
    template: template,

    events: {
      'submit form.login': 'alertLogin',
    },

    alertLogin: function(e){
      e.preventDefault();
      var userData = this.serialize();
      console.log(userData);
    }
  });
});
