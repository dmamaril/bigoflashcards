define(['underscore', 'backbone'], function(_, Backbone){
  return _.extend(_.clone(Backbone.Events), {});
});