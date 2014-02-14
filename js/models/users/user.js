define([
  'model',
  'config'
  ], function (Model, config) {
  return Model.extend({
    name: 'users/user',

    defaults: {
      name: "Doug's Beard",
      email: "doug@hackreactor.com",
      username: "dougsbeard",
      decks: []
    },

    url: config.host + "/api/users/"

  });
});
 