define([
  'underscore',
  'layout-view',
  'hbs!templates/root',
  'routers/mediator'
], function(_, LayoutView, rootTemplate, mediator) {
  var RootView = LayoutView.extend({
    name: 'root',
    template: rootTemplate
  });

  var instance;
  RootView.getInstance = function(target) {
    if (!instance) {
      instance = new RootView();
      instance.appendTo(target || document.body);
    }
    return instance;
  };

  return RootView;
});
