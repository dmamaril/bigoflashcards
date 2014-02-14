define([
  'model',
  'config'
  ], function (Model, config) {
  return Model.extend({
    name: 'users/user',

    defaults: {
      username: "",
      password: "",
      email: "",
      decks: []
    },

    url: config.host + "/api/users/"

  });
});
