define(["Promise"], function(Promise) {
  return {
    load: function() {
      return new Promise(function(accept, reject){
        setTimeout(accept, 1000); // Simulate loading resources
      });
    }
    // Provide whatever access to resources you want here.
    // E.g. R.getModel('knight'), R.getIcon('close')... whatever
  };
});
