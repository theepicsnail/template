define([], function() {
  return {
    start: function() {
      document.body.innerText = "Pretending to load stuff";
    },
    stop: function() {
      document.body.innerText = "All loaded!";
    }
  };
});
