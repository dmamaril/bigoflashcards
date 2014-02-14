define([
  'config',
  'view',
  'hbs!templates/index/login-view'
], function (config, View, template) {
  return View.extend({
    name: 'index/login-view',
    template: template,

    events: {
      'submit form.login': 'alertLogin',
    },

    alertLogin: function(e){
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
