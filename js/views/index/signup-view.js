define([
  'config',
  'view',
  'hbs!templates/index/signup-view'
], function (config, View, template) {
  return View.extend({
    name: 'index/signup-view',
    template: template,

    events: {
      'submit form.signup': 'alertSignup'
    },

    alertSignup: function(e){
      e.preventDefault();
      var userData = this.serialize();
      $.ajax({
        url: config.host + "/api/login/",
        type: "POST",
        dataType: "json",
        data: userData,
        success: function(data){
          console.log(data);
          console.log("GREAT SUCCESS");
        }
      });
    }
  });
});
