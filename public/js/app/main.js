define(["promise"], function(Promise) {
  return {
    init: function() {
      return new Promise(function(accept, reject){
        document.body.innerText = "Initializing main app";
        setTimeout(accept, 1000); // Simulate piecing together a map, waiting on sockjs, whatever.
      });
    },
    start: function() {
      // We're all ready to go!
      // start your main loop, or whatever here.
      var count = 0;
      setInterval(function() {
        count += 1;
        document.body.innerText = "You've been staring at this page for " + count + " seconds!";
      },1000);
    }
  };
});
